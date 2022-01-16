# About
Projeto de mensageria utilizando RabbtiMQ com Spring.

## Projetos
    msg: O projeto msg implementa um consumer do rabbitMQ para comunicões assíncronas e api rest para comunicações síncronas:

# Getting Started
    * Clone o projeto do gitHub: https://github.com/VagnerSilva/microservice_fiap.git
    * Vá ao diretório mensageria/msg
    * Buildar e Rodar o projeto na porta 8080
    * Verifique e, se necessário, modifique o arquivo de configuração application.properties
    * Rode o docker local do RABBITMQ:
        docker run -d -p 5672:5672 -p 15672:15672 --name=rabbitmq rabbitmq:3.8.3-management
    * Gerencie o RABBIT pela interface de usuário:
        http://localhost:15672
    * Faça um envio de uma mensagem pelo gerenciador do RabbitMQ:
        ```{
            "body": "Envio e-mail do RABBITMQ",
            "subject": "SocialLearn Mensageria",
            "to": "seuemail@fiap.com"
        }```
