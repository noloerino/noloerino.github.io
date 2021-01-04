# Copies all the duna stuff and automatically deploys
set -ex
PROJ_DIR=../projects/duna/duna-web/www/
cd "$PROJ_DIR"
COMMIT_MSG=`git log --pretty=format:"%h @ %ad | %s" -n1`
yarn build
cd -
cp $PROJ_DIR/dist/* .
git add -A
git commit -m "[autodeploy] $COMMIT_MSG"
git push

