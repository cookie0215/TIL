# SQL
: 관계형 데이터베이스 관리 시스템에서 데이터를 관리하기 위해 사용되는 표준 프로그래밍 언어

## SQL문
- 대소문자 구분 없이 모두 허용 ex) SELECT == select
- SQL문은 작성 순서가 중요하다

<br>

### CREATE TABLE
- 테이블 생성
- 테이블 열의 이름과 정의를  `콤마(,)`로 구분하여 지정
- 테이블의 위치를 지정해야 하는 DBMS도 있다.

  ``` SQL
  CREATE TABLE {테이블명}(
    컬럼1 데이터타입,
    컬럼2 데이터타입,
    ...
  )
  ```
  :  데이터 타입을 예시처럼 지정해줄 수 있다. (ex. varchar, integer 또는 int, blob, date, etc.)
  
  > 데이터 타입 중 **`BLOB`** 타입이란?
  > - 이미지, 오디오, 비디오 등과 같은 데이터를 저장할 때 사용되는 데이터타입
  > - 위의 파일들을 0과 1인 이진법형태로 바꾸기 위해 사용됨

- CREATE 문에서 column의 `제약 조건`을 작성할 수 있다.

<br>

> ### `제약조건`의 종류
> 데이터의 무결성을 지키기 위해, 데이터를 입력받을 때 실행되는 검사 규칙을 의미
>
> 1. **PRIMARY KEY** <br>
> : 테이블당 오직 하나의 필드에만 설정
> 2. **FOREIGN KEY** <br>
> 3. **UNIQUE** <br>
> : 한 테이블의 여러필드에 설정 가능
> 4. **CHECK** <br>
> 5. **DEFAULT** <br>
> 6. **NULL / NOT NULL** <br>
> : NOT NULL은 값이 비어있으면 안된다는 의미 (무조건 데이터 값이 있어야 한다)


<br>

### USE
> `USE {스키마(DB)명}`
- 스키마 (데이터베이스) 선택

### SELECT
- 테이블에서 가져오고 싶은 column(열,세로)을 선택하는 명령문
- `SELECT *` : 테이블에서 모든 정보를 가져오고 싶을 때 사용

### FROM
- 가져오고 싶은 정보가 있는 테이블을 선택할 때 사용

```sql
-- SELECT '컬럼명' FROM '테이블명'
SELECT 컬럼명1, 컬럼명2 FROM 테이블명;

-- SELECT 와 FROM 사이에 *를 적으면 테이블의 모든 컬럼을 조회한다.
SELECT * FROM 테이블명;

-- 두 SQL은 동일한 기능을 한다.
SELECT * FROM 스키마(DB)명.테이블명;
SELECT * FROM 테이블명;
```

<br>

### JOIN ~ ON 
> `JOIN {테이블명} ON {테이블1.id = 테이블2.id}`

#### JOIN
- 테이블과 테이블을 하나의 테이블로 합칠 때 사용
- 두가지 테이블이 id를 공유하고 있어야 하나의 테이블로 합칠 수 있다. (여러개의 테이블을 하나로 합칠 수 있다)

#### ON
- JOIN의 기준을 명시
- 테이블1의 id와 테이블2의 id가 동일하다면, 두 테이블을 매핑시켜 같은 레코드로 조회하라는 의미이다.


ex) Orders테이블과 OrderDetails테이블에 있는 OrdersID를 기준으로 합치기

```SQL
SELECT * FROM Orders
JOIN OrderDetails ON Orders.OrdersID = OrderDetails.OrdersID 
```

<br>
<br>

### WHERE 명령문
> `WHERE 조건`

- 특정 조건에 해당하는 데이터만 조회할 때 사용
- 비교/논리/SQL 연산자와 함께 사용 가능

| 비교연산자 | 설명 |
| :-- | :-- |
`=` | 같다
`컬럼 > A` | A보다 크다
`컬럼 >= A` | A보다 크거나 같다
`컬럼 < A`| A보다 작다
`컬럼 <= A` | A보다 작거나 같다
`!=` | 같지 않다 
`^=` | 같지 않다
`<>` | 같지 않다
`NOT 칼럼 = ` | ~와 같지 않다 
`NOT 칼럼 >` | ~보다 크지 않다

<br>

| SQL연산자 | 설명 |
| :-- | :-- |
`BTWEEN A AND B` | A와 B사이에 있다 
`IN( )` | 리스트 중 하나라도 일치
`LIKE` | 문자열의 일부 글자를 검색
`IS NULL` | NULL값
`NOT BETWEEN A AND B` | A와 B사이에 있지 않다
`NOT IN` | 비교문자열과 일지하지 않는다
`IS NOT NULL` | NULL값을 갖지 않는다

> LIKE연산자 <br>
> `_` : 한글자만 매치 가능 <br>
> `%` : 몇 글자든 매치 가능

<br>

| 논리연산자 | 설명 |
| :-- | :-- |
`A A ND B` | A조건과 B조건 모두 충족
`A OR B` | A조건과 B조건 중 하나라도 충족
`NOT 조건` | 조건이 아닐 때, 레코드를 조회 

<br>
<br>

### GROUP BY
> `GROUP BY {컬럼명}`
- 특정 컬럼을 기준으로 나머지 컬럼을 집계(그룹화)할 때 사용

### HAVING
- 그룹화된 데이터에 대해 조건을 제한하기 때문에 GROUP BY 뒤에 사용된다.

<br>

> <WHERE 과 HAVING 혼동하지 말기> <br>
> ### `Where`
> - 그룹화 또는 집계가 발생하기 전에 레코드를 필터링하는데 사용
> -  Group By 절 앞에 사용
> ### `Having`
> - 그룹화 또는 집계가 발생한 후 레코드를 필터링하는데 사용
> - Group By 절 뒤에 사용 

<br>

### COUNT( )
- 전체 또는 조건에 해당하는 레코드의 수량을 조회할 때 사용
- NULL이 있을 경우 카운트하지 않음
- `COUNT(*)` 연산 : 모든 row를 대상으로 이루어지기 때문에 `NULL값이 포함되어있어도 카운트됨`

### DISTINCT
> `DISTINCT {컬럼명}`
- 중복값 제거

### ORDER BY
> `ORDER BY {컬럼명} ASC/DESC`

- 특정 컬럼(열,세로)기준으로 정렬
- WHERE 절 뒤에 사용 가능
- ASC : 오름차순(생략 시, 기본값)
- DESC : 내림차순

<br>
<br>

### INSERT
> `INSERT INTO` {테이블명} ([칼럼1], [칼럼2], [칼럼3] ...) `VALUES` ([값1], [값2], [값3] ...)

- SQL Server에서 데이터를 입력하기 위해서는 INSERT 문을 사용
- VALUES 절을 사용하여 해당 테이블에 새로운 레코드를 추가할 수 있다.

### DROP TABLE
> `DROP TABLE {테이블명}`
- 테이블 삭제