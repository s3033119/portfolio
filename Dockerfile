#本番環境
FROM centos:7

MAINTAINER Tomohiro Hidaka

WORKDIR /app

#apacheとnodejsをインストール
#マルチステージビルドにしたかったがうまくいかず
RUN yum update -y && yum clean all
RUN yum install -y httpd && yum clean all
RUN curl -sL https://rpm.nodesource.com/setup_8.x | bash -
RUN yum install -y nodejs && yum clean all

# package,package-lock.jsonをベースイメージにコピー
# ./app/配下にコピーされる
COPY package*.json ./

#まずはモジュールのインストール
RUN npm install

#フォルダの中身を全てそのまま渡す
COPY . .

#持ってきたあとにビルド,/app/distに生成物ができる
RUN npm run build

#npm buildした生成物をapacheのドキュメントルートに移動
RUN mv ./build/* /var/www/html/

#docker run -d -p <PORT>:80 <IMAGE>
EXPOSE 80
CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
