
dani = User.create(:email => 'dani@asamblea.net', :password => 'entrar', :password_confirmation => 'entrar')
vega = User.create(:email => 'vega@asamblea.net', :password => 'entrar',  :password_confirmation => 'entrar')

cyl = Group.create(:name => 'Crestas y lechugas')
cyl.users << dani
cyl.users << vega
cyl.save

gac = Group.create(:name => 'Hierbagüenas')
gac.users << dani
gac.save

enlace = Agenda.create!(:name => 'Enlace 17/4/2010', :group => cyl)
enlace.topics.create(:name => 'Hablar de cosas', :description => 'Mola mucho')
enlace.topics.create(:name => 'Hablar de más cosas', :description => 'Mola regular')
enlace.topics.create(:name => 'Hablar de otras cosas', :description => 'Mola bastante')

gac.create_assembly(enlace)

plenaria = Agenda.create!(:name => 'Plenaria', :group => cyl)
plenaria.topics.create(:name => 'Gallinas', :description => 'Nuestro tema')
plenaria.topics.create(:name => 'Grupo de trabajo')
cyl.create_assembly(plenaria)