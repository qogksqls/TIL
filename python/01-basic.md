# 챗봇
Telegram깔아서 파이썬챗봇 친추함

미세먼지, 로또, 코스피 불러오기 해봄


# 파이썬
컴퓨터 프로그래밍 언어
What? 컴퓨터에게 무언가를 시킬 때 쓰는 말
Why? 
첫 언어를 제대로 배우는 것이 중요.

> refactoring => 결과는 같은데 과정이 개선되는 것

## 1. 저장
>1) `변수`(variable)
박스에 값 담기
박스 == 변수
숫자, 글자, 참/거짓
>2) 리스트
dust = [1,2,3]
print(dust[1])
>3) 딕셔너리(dictionary)
dust = {'영등포구' : 58, '강남구' = 20}
print(dust['영등포구'])
## 2. 조건
`if/elif/else`
## 3. 반복
> `while`
dust = [1,2,3]
n=0
while n<3:
  print(dust[n])
  n = n + 1
> `for`
```dust = [1,2,3]
for i in dust:
  print(i)```

## 함수
특정한 용도의 동작하는 코드를 한 곳에 모아 놓은 것
일의 단위
>Python 내장함수
>Python Module(외장함수) - random
	서랍속에 있지, 손에만 안닿을 뿐
	`import`
### Built-in Function

# 웹 페이지 크롤링
크롤링 : 기어가다

```$ pip install requests```