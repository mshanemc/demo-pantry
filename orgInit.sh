sfdx force:org:create -f config/project-scratch-def.json -d 1 -s
sfdx shane:github:package:install -g mshanemc -r community-boilerplate
sfdx force:source:push
sfdx force:user:permset:assign -n DemoManager
sfdx force:org:open