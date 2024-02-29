# 使用官方的nginx镜像作为基础镜像  
FROM nginx:stable-alpine  
  
# 将当前目录中的nginx.conf复制到镜像中的nginx配置目录中  
COPY nginx.conf /etc/nginx/nginx.conf  

# 将web应用程序目录复制到镜像中的nginx网站目录中  
COPY dist/ /usr/share/nginx/html  
  
# 暴露3000端口，以便可以通过HTTP访问应用程序  
EXPOSE 3000
  
# 在容器启动时启动nginx服务  
CMD ["nginx", "-g", "daemon off;"]