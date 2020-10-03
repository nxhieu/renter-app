FROM openjdk:8-jre-alpine
VOLUME /app
COPY target/account-service.jar /app/
ENTRYPOINT ["java",  "-Xmx200m", "-jar","/app/account-service.jar", "SPRING_PROFILES_ACTIVE=test"]


EXPOSE 8080
# FROM openjdk:8-jdk-alpine
# RUN addgroup -S spring && adduser -S spring -G spring
# USER spring:spring
# ARG DEPENDENCY=target/dependency
# COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
# COPY ${DEPENDENCY}/META-INF /app/META-INF
# COPY ${DEPENDENCY}/BOOT-INF/classes /app
# ENTRYPOINT ["java","-cp","app:app/lib/*","hello.Application"]
#Start from maven docker image
# FROM java:8-jre
# MAINTAINER Alexander Lukyanchikov <sqshq@sqshq.com>

# ADD ./target/account-service.jar /app/
# CMD ["java", "-Xmx200m", "-jar", "/app/account-service.jar"]

# EXPOSE 6000