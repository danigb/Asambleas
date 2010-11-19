
dani = User.create(:email => 'dani@asamblea.me', :password => 'entrar', :password_confirmation => 'entrar')
vega = User.create(:email => 'vega@asamblea.me', :password => 'entrar',  :password_confirmation => 'entrar')

cyl = Group.create(:name => 'Crestas y lechugas')
cyl.users << dani
cyl.users << vega
cyl.save

gac = Group.create(:name => 'Hierbagüenas')
gac.users << dani
gac.save

a1 = vega.assemblies.create(:title => 'Asamblea1')
a1.participants.create(:name => 'Dani', :user_id => dani.id)
a2 = vega.assemblies.create(:title => 'Asamblea2')
a2.participants.create(:name => 'Dani', :user_id => dani.id)


