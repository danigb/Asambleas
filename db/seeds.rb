
dani = User.create!(:email => 'dani@asamblea.net', :password => 'entrar')
vega = User.create!(:email => 'vega@asamblea.net', :password => 'entrar')

cyl = Group.create(:name => 'Crestas y lechugas')
cyl.users << dani
cyl.users << vega
cyl.save

hg = Group.create(:name => 'Hierbagüenas')
hg.users << dani
hg.save

agenda = Agenda.create!(:name => 'Enlace 17/4/2010', :group => cyl)
agenda.topics.create(:name => 'Hablar de cosas', :description => 'Mola mucho')
agenda.topics.create(:name => 'Hablar de más cosas', :description => 'Mola regular')
agenda.topics.create(:name => 'Hablar de otras cosas', :description => 'Mola bastante')

hg.create_assembly(agenda)

pl = Agenda.create!(:name => 'Plenaria', :group => cyl)
pl.topics.create(:name => 'Gallinas', :description => 'Nuestro tema')
pl.topics.create(:name => 'Grupo de trabajo')
