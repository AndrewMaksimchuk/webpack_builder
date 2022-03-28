default: command_list
# Inser word "make" after prompt

command_list:
	clear
	@echo "\e[1;91mCommands:\e[0m"
	@echo "\e[0;32mserve\e[0m  -  Run development server"
	@echo "\e[0;32mbuild\e[0m  -  Create production bundler"
	@echo "\e[0;32mclear\e[0m  -  Delete builder folder"
	@echo ""

serve:
	npm run serve

build: clear
	npm run build

test:
	npm run test

clear:
	rm -rf ./build
