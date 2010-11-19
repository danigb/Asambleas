
dani = User.create(:email => 'dani@asamblea.me', :password => 'entrar', :password_confirmation => 'entrar')
vega = User.create(:email => 'vega@asamblea.me', :password => 'entrar',  :password_confirmation => 'entrar')

cyl = Group.create(:name => 'Crestas y lechugas')
cyl.users << dani
cyl.users << vega
cyl.save

gac = Group.create(:name => 'Hierbagüenas')
gac.users << dani
gac.save

