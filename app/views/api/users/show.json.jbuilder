json.users do
  json.partial! 'api/users/user', user: @user
end