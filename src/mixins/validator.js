export const regex = {
  text: /.*/,
  houseNumber: /^[0-9a-zA-Z ]{1,12}$/,
  phone: /^[0-9 \\+\\-\\(\\)\\/]{3,20}$/,
  // password: /^[0-9a-zA-Z!*^?+-_@#$%&<>§±'":;.,/=~\[\]\{\}\`\(\)\|\\ ]{8,64}$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  // NOTE: uk zip code is provided by goverment
  // ukZip: /^(([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2}))$/
  ukZip: /^(([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2}))$/,
  zipCode: /^.{1,12}$/
}
