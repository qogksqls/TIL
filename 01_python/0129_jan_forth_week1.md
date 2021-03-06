# 데이터 구조
- 데이터에 효율적인 접근 및 수정을 가능케 하는 데이터의 구성, 관리 및 저장형식
- 함수와 명령어들의 모음

# ordered 데이터 구조
## 문자열(string)
### 조회 및 탐색
- immutable(변경 x), ordered(순서 o), iterable(순회 o)
- `.find(x)` : x의 **첫 번째 위치**를 반환, 만일 list내에 x가 없으면 `-1`을 반환
- `.index(x)` : x의 **첫 번째 위치**를 반환, 만일 x가 없으면 오류 발생
- `.startswith(x)` : 문자열이 x로 시작하면 True, 아니면 False
- `.endswith(x)` : 문자열이 x로 끝나면 True, 아니면 False
### `is~`로 시작하는 매서드
- `.isalpha()` : 문자열이 (숫자가 아닌)글자로 이루어져 있는가?
- `.isspace()` : 문자열이 공백으로 이루어져 있는가?
- `.isupper()` : 문자열이 대문자로 이루어져 있는가?
- `.istitle()` : 문자열이 타이틀 형식으로 이루어져 있는가?
- `.islower()` : 문자열이 소문자로 이루어져 있는가?
- `.isdecimal()`: 문자열이 0~9까지의 수로 이루어져 있는가?
- `.isdigit()`: 문자열이 숫자로 이루어져 있는가?
- `.isnumeric()`: 문자열을 수로 볼 수 있는가?

### 문자열 변경
- `.replace(old, new[, count])` : 바꿀 대상 글자를 새로운 글자로 바꿔서 반환, count를 지정하면 해당 갯수만큼만 시행
- `.strip([chars])` : 특정한 문자를 지정하면 양쪽을 제거하거나(strip) 왼쪽은 제거하거나(lstrip) 오른쪽을 제거합니다(rstrip), `chars` 파라미터를 지정하지 않으면 공백 제거
- `.split([chars])` : 문자열을 특정한 단위로 나누어 list로 반환
- `'separator'.join(iterable)` : iterable의 문자열들을 separator(구분자)로 이어 붙인(`join()`) 문자열을 반환합니다.
- `.capitalize()` : 앞글자를 대문자로 만들어 반환
- `.title()` : 어포스트로피(')나 공백 이후를 대문자로 만들어 반환
- `.upper()` : 모두 대문자로
- `.lower()` : 모두 소문자로
- `.swapcase()` : 대<->소문자로 변경하여 반환

#### `dir('string')`, `dir(str)` : dir을 통해 컨테이너가 가지고 있는 메서드 확인

## List
- mutable, ordered, iterable
### 값 추가 및 삭제 => 원본 변경
- `.append(x)` : 리스트에 값 추가
- `.extend(iterable)` : 리스트에 iterable(list, range, tuple, string) 값을 붙일 수 있음
- `.insert(i, x)` : 정해진 위치 `i`에 값을 추가
- `.remove(x)` : 리스트에서 값으 x인 첫 번째 항목 삭제, 없으면 `ValueError`
- `.pop([i])` :  정해진 위치 `i`에 있는 값을 삭제하명 그 값을 `return`
- `.clear()` : 리스트의 모든 항목 삭제
### 탐색 및 정렬
- `.index(x)` : x 값을 찾아 해당 index 값을 반환
- `.count(x)` : 원하는 값의 개수
- `.sort()` : 리스트 정렬, 내장함수 `sorted()`있음. `None`을 리턴, 파라미터로 key랑 reverse
- `.reverse()` : 리스트의 element들을 제자리에서 반대로 뒤집음, 내장함수 `reversed()`, `None`을 리턴, 파라미터로 key랑 reverse

#### `dir(list)`, `dir([])` : dir을 통해 컨테이너가 가지고 있는 메서드를 확인

## tuple
- immutable, ordered, iterable
### 탐색
- `.index(x[, start[, end]])` : 튜플에 있는 항목 중 값이 x와 같은 첫 번째 인덱스를 반환, 값으 없으면 `ValueError`
- `.count(x)` : 튜플에서 x가 등장하는 횟수 반환

# unordered 데이터 구조
## Set
- mutable, unordered, iterable
### 추가 및 삭제
- `.add(elem)` : elem을 set에 추가
- `.update(*others)` : 여러 값을 추가, 반드시 iterable 데이터 구조를 전달
- `.remove(elem)` : elem을 set에서 삭제하고 set 내에 elem이 존재하지 않으면 KeyError 발생
- `discard(elem)` : elem을 set에서 삭제하고 set 내에 elem이 존재하지 않아도 에러 발생하지 않음

#### `dir(set)`

## Dictionary
- mutable, unordered, iterable
- `Key: Value` 페어의 자료구조
### 조회
- `.get(key[, default])` : key를 통해 value를 반환, key 없을경우 에러
- `.setdefault(key[, default])` : key를 통해 value를 반환, key 없을경우 default값을 갖는 key를 삽입한 후 default를 반환, default가 없을 경우 `None` 리턴
### 추가 및 삭제
- `.pop(key[, default])` : key가 딕셔너리에 있으면 제거하고 그 값을 반환, 그렇지 않으면 default반환, default없으면 key도 없으면 에러
- `.update([other])` : other가 제공하는 key, value 쌍으로 dict에 덮어씀. `other`는 다른 딕셔너리나 key/value 쌍으로 되어있는 모든 iterable을 사용 가능

#### `dir(dict)`

# 얕은 복사와 깊은 복사
## 할당(Assignment)
```
original_list = [1, 2, 3]
copy_list = original_list
copy_list[0] = 5
copy_list  # [5, 2, 3]
original_list # [5, 2, 3]
```

## 얕은 복사(Shallow copy)
- slice 연산자 사용 [:]
- list() 활용
- 
## 깊은 복사(Deep copy)

# 에러 & 예외 처리
## 에러(Error)
### 문법 에러(Syntax Error)
- 에러 발생 시 `SyntaxError`라는 키워드와 함께, 에러의 상세 내용을 보여줍니다.
- `파일이름`과 `줄번호`, `^` 문자를 통해 파이썬이 코드를 읽어 들일 때(`parser`) 문제가 발생한 위치를 표현합니다.
- `parser` 는 줄에서 에러가 감지된 가장 앞의 위치를 가리키는 캐럿(caret)기호(`^`)를 표시합니다.

## 예외(Exception)
- `ZeroDivistionError` : 파이썬에서는 어떤 수를 0으로 나누게 되면 에러가 발생
- `NameError` : 지역 혹은 전역 이름 공간 내에서 유효하지 않는 이름은 사용할 수 없습니다. 즉, 어느 곳에서도 정의되지 않은 변수를 호출하였을 경우 에러가 발생
- `TypeError` : 자료형이 올바르지 못한 경우
- `ValueError` : 자료형은 올바르나 값이 적절하지 않은 경우
- `IndexError` : 존재하지 않는 index로 조회할 경우
- `KeyError` : 존재하지 않는 Key로 접근한 경우
- `ModuleNotFoundError` : 존재하지 않는 Module을 import 하는 경우
- `ImportError` : Module은 찾았으나 존재하지 않는 클래스/함수를 가져오는 경우
- `KeyboardInterrupt` : 사용자가 임의로 실행을 중단한 경우. 주피터 노트북에서는 정지 버튼이지만, 실제로 우리가 돌릴 때는 ctrl+c를 통해 종료하였을 때 발생합니다.
- `IndentationError` : Indentation(들여 쓰기)이 적절하지 않은 경우

# 예외 처리(Exception Handling)
## try & except
```
try:
    <코드 블록 1>
except (예외):
    <코드 블록 2>
```
- `try` 아래의 코드 블록(code block)이 실행됩니다.
- 예외가 발생되지 않으면, `except` **없이 실행이 종료됩니다.**
- 예외가 발생하면, **남은 부분을 수행하지 않고**, `except`가 실행됩니다.

## 복수의 예외 처리

## 예외 발생 시키기(Exception Raising)
- `raise` : 예외 강제로 발생
- `aseert` : 예외 강제 발생, `AssertionError` 무조건 발생