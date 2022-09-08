# SQLD

## sql 명령문 순서

1. **From - where - group by - having - select - order by**

2. 
   
   1. DML(데이터조작어) - select, insert, delete, update
   
   2. DDL - alter, create, modify, drop, rename ...
   
   3. TCL - rollback, commit
   
   4. DCL - grant, revoke

## SELECT

- distinct(집약) -> 중복된 값 삭제 = group by

- **AS** 
  
  - select -> 1. as 생략가능 2. 컬럼명에 띄어쓰기
  
  - from -> as 사용불가

- concat
  
  - `+` -> sql server
  
  - `||` -> oracle
  
  - 인수가 반드시 2개여야 한다. concat(x, y)

## 논리 연산자

- and

- or

- not

**연산순위**

1. NOT

2. AND

3. OR

## sql 연산자

- between and

- IN

- **<mark>LIKE</mark>** => 3문제 나옴
  
  - LIKE __ -> 미지의 한 글자
  
  - LIKE % -> 0 이상 글자
  
  - LIKE escape -> 와일드카드(_ %)를 문자로 취급

- Rownum (oracle)
  
  - (where 절) Rownum 이 1인 경우를 포함
  
  - **Select empno, sal From emp Where 0<= rownum <= 3 order by sal desc**

- Top (sql server)
  
  - (select 절) TOP (n) <컬럼명> -> 컬럼명을 출력할 때 상위 n개 가져오기

## <mark>NULL</mark> - 왕별표 3개

1. null의 정의
   
   1. 부재, 모르는 값
   
   2. 산술 연산
      
      1. null + 2 = null
      
      2. null - 4 = null
      
      3. null x null = null
   
   3. 비교 연산
      
      1. null = null => 알 수 없음(unknown) -> where 조건절에 false 처리
      
      2. null = 2 => 알 수 없음(unknown) -> where 조건절에 false 처리
   
   4. 정렬 상 의미
      
      1. oracle -> 무한대
      
      2. sql server -> -무한대

2. ㅇㅇ
   
   1. nvL (값1, 값2) -> 널뛰기
   
   2. nvL2 (값1, 값2, 값3)  -> 널뛰기
   
   3. isNull (값1, 값2)  -> 널뛰기
   
   4. Null if (값1, 값2)  -> 같이 놀자!
   
   5. coalesce (값1, 값2, .....) -> 널 아닌 첫번째 값

## 정렬

1. 정렬의 특성
   
   1. 가장 마지막 실행
   
   2. 성능이 느려질 수 있다.
   
   3. null 값 과의 관계

2. 컬럼 번호 정렬
   
   - 출력되는 컬럼의 수보다 큰 값 불허

3. 인수 두 개 정렬
   
   - sall desc, ename acs -> sal이 같으면 ename 오름차순

4. select ename order by sal

## 숫자 함수

- Round 자릿수 ex) Round(138.94) = 139

- ceil / ceiling

## 문자열 함수

- upper, lower

- Lpad, Rpad

- LTrim, RTrim

- substr

- nstr

## 날짜 함수

- TO_char

- TO_date -> 형변환 되냐? O

- Sysdate(oracle) -> 현재시간

- Getdate(sql server)

- 날짜 데이터  + 100 = 100일 이후, default는 day

## DECODE / CASE -> CASE만 보기

- Case
  
  - when than -> 조건 1
  
  - when than -> 조건 2
  
  - else -> else없을 때 조건 1,2 만족 안하면  null 출력
  
  - end

## <mark>집계함수</mark> - 왕별표!!!!

- null 과의 관계

![](C:\Users\SSAFY\AppData\Roaming\marktext\images\2022-09-03-15-16-20-image.png)

## GROUP BY

- 집약기능

- 그룹 수준

## JOIN

1. natural join, using join
   
   - 중복된 컬럼 집약
   
   - 제일 앞에 등장
   
   - **<mark>using 은 alias 사용 x</mark>**

2. left outer join
   
   1. `A left outer join B` = `A coll = B coll (+)`

## 서브쿼리

- select: scalar

- from: inline view -> 메인 쿼리의 컬럼 사용 가능

- where: 거의 모든 서브 쿼리 들어감 -> 중첩 서브 쿼리

- group by: x

- having: 거의 모든 서브 쿼리 -> 중첩 서브 쿼리

- order by: scalar



- In

- any / some

- all

- exist
  
  - '1' => true
  
  - 'x' => true
  
  - 'a' => true
  
  - 0 rows => false

## 집합연산자

- union -> 정렬 O, 합집합

- intersect -> 정렬 O, 교집합

- minus (Except) -> 정렬 O, 차집합

- union all -> 중복 데이터 존재, 정렬 x, 그래서 빠름, 합집합

## DDL -> TCL과 연관지어 생각

- Truncate(입주민 전부 퇴거, 구조가 남음) vs DROP (철거, 구조 안남음)

- Truncate vs delete => DDL vs DML -> rollback, commit 연관되어 출제

## DML

- insert

- update

- delete -> TCL(commit, roll back)

- merge -> 신유형 37회

## <mark>제약조건</mark> -> 별 3개

- pk = unique + not null

- unique

- not null

## DCL

- Grant: 정의 공부, role 특징(5개), 명령어아니고 객체임

- revoke

## VIEW

- 독편보
  
  - 독립성 - 따로 업데이트할 필요 없다
  
  - 편리성
  
  - 보안성

## <mark>그룹함수</mark> -> 결과값 주고 이게 뭘 썼는지 물어보는 문제

- roll up

- cube

- grouping sets

- grouping -> 요즘 안냄

## TCL

- commit
  
  - auto commit off
  
  - Begin transaction -> DDL 에 commit 기능 없앰

- roll back
