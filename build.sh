# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist


git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:nifan950624/mdToVue-demo.git master:gh-pages

cd -
