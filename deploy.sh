#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 检查文件语言格式错误
lint-md /Users/xiazhiming/GitHub/MaskPM/src --fix
#复制图片是静态资源
cp ./src/imges/* ./src/.vuepress/public/imges/

# 生成静态文件
npm run build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.name.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:xiazhiming/MaskPM.git master:gh-pages

cd -
