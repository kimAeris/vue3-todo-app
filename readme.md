### 컴포넌트 역할  

컴포넌트 | 역할
-- | -- 
App | 애플리케이션을 구성하는 최상위 컴포넌트  
TodoListcontainer | 컴포넌트를 관리하는 컨테이너 컴포넌트
TodoListNew | 새로운 Todo를 생성할 수 있는 UI를 제공하는 컴포넌트
TodoListMain | 실제 작업목록을 관리하고 데이터를 TodoList에 전달하는 컨테이너
TodoListMenu | 작업목록에 필터를 걸어줄 수 있는 사용자 메뉴를 제공하는 컴포넌트
TodoList | 데이터를 전달받아 해당 데이터를 화면에 보여주는 컴포넌트


## 프로젝트 생성
```bash
npm init vite-app todo  
npm install bootstrap@5.3.2  
npm install @popperjs/core  
```

## 프로젝트 실행
Vue 개발 서버를 실행한 후 브라우저에서 접속할 수도 있지만,
```
npm run dev
```
Window 배치파일을 만들어 더블클릭으로 쉽게 애플리케이션을 열 수 있다.
todolist.bat
```
cd /d "D:\FrontEnd\Vue"
start chrome http://localhost:3000
npm run dev
```

## main.js
애플리케이션을 구성하는 모든 컴포넌트는 **today를 inject**하여 사용 가능하게 한다.

## compositions
컴포지션 API를 이용해 만든 모듈을 관리하는 폴더

### storage.js - 데이터 저장소 구현
- storage_obj는 객체이므로 반응성을 갖게 하기 위해 **reactive** 함수 이용  
- Spread Operator(...)로 풀린 속성은 반응성을 갖지 않기 때문에 **toRefs**로 모든 속성이 반응성을 가지게 한다.

### filters.js - 데이터의 필터링 모듈 구현
- **slice** 메서드를 사용하여 동일한 배열의 복사본을 만들고 원본데이터는 정렬되지 않은 원본 상태로 둔다.

## TodoListContainer
앱을 총괄하게 되는 컴포넌트  
todos 변수에 대한 처리 로직이 담겨있다.

## TodoList 
props로 들어온 데이터를 리스트 형식으로 렌더링한다.

## TodoListMenu
TodoList에 전달할 값을 결정한다.

## TodoListMain
TodoKist + TodoListMenu 를 직접적으로 사용할 부모 컴포넌트로,  
TodoListMenu 로부터 filter의 키 값을 전달받아 연계된 함수를 호출하여 TodoList에 전달한다.

## TodoListNew
사용자로부터 새로운 할일을 입력받는 컴포넌트