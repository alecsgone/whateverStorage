# whateverStorage
API to store objects effortless in the browser for sessionStorage, localStorage and cookies
```sh
npm i -S whatever-storage
```
```js
import db from 'whatever-storage'

db.session.setItem('tmp_key', { foo: 'bar' })
db.session.getItem('tmp_key') // { foo: 'bar' }
db.session.removeItem('tmp_key')
db.session.clear()

db.local.setItem('tmp_key', { foo: 'bar' })
db.local.getItem('tmp_key') // { foo: 'bar' }
db.local.removeItem('tmp_key')
db.local.clear()

db.cookie.setItem('tmp_key', { foo: 'bar' }, {
  expires: '1 day', // default is 1 minute
  domain: 'xxx', // default is window.location.hostname
  path: '/', // default is '/'
})
// Other possible 'expires' values are
// strings of 'number time_unit'
// e.g. 2 days
// e.g. 1 minute
//
// Valid time units are:
// minute, minutes, hour, hours, day, days,
// week, weeks, month, months, year, years

db.cookie.getItem('tmp_key') // { foo: 'bar' }
db.cookie.removeItem('tmp_key')

db.cookie.setItem('tmp_key2', 'value')
db.cookie.getItem('tmp_key2') // value
db.cookie.clear()
```