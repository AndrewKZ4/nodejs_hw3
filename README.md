# nodejs_hw3

## Api 
### Groups:
#### GET:
`/api/groups ` - get all groups

`/api/groups/:id ` - get groups by id
#### POST:
`/api/groups ` - create group

Body content:

`
{
  group_name: groupName
}`

#### PUT:
`/api/groups ` - update group

Body content:

`
{
  id: id
  group_name: groupName
}`

#### DELETE:
`/api/groups/:id ` - delete group

### Students:
#### GET:
`/api/students ` - get all students

`/api/students/:id ` - get student by id
#### POST:
`/api/students ` - create student

Body content:

`
{
  first_name: firstName
  last_name : lastName
  birthdate: 'YYYY-MM-DD'
  group_id: groupId
}`

#### PUT:
`/api/students ` - update student

Body content:

`
{
  id:id
  first_name: firstName
  last_name : lastName
  birthdate: 'YYYY-MM-DD'
  group_id: groupId
}`

#### DELETE:
`/api/students/:id ` - delete student


