export class Base {
  static apiUrl = "http://localhost:8000/api";

  static getAuthToken() {
    let auth: any = window.localStorage.getItem('auth');
    let parseAuth = JSON.parse(auth);
    return parseAuth ? parseAuth.accessToken : '';
  }

  static requestHeader() {
    return { "x-access-token" : `${Base.getAuthToken()}`  };
  }
}
