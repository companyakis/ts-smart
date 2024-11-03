![image](https://github.com/user-attachments/assets/7fc06eb4-aa03-464f-a21b-7784fc1b348b)

# I'm using Windows! Windows is only supported through a Linux virtual environment of some kind, such as WSL. 

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

nvm install 20

node --version

DFX_VERSION=0.22.0 sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"

dfx --version

# create a new default project called hello_world

npx azle new hello_world

cd hello_world

# install all npm dependencies including azle

npm install

# start up a local ICP replica

dfx start --clean

# In a separate terminal in the hello_world directory:

dfx deploy
