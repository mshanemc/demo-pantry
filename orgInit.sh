sfdx force:org:create -f config/project-scratch-def.json -d 1 -s
sfdx shane:github:package:install -g mshanemc -r community-boilerplate
sfdx force:source:push
sfdx force:source:deploy -p postPush
sfdx force:user:permset:assign -n DemoManager
sfdx automig:load -d data
sfdx force:org:open