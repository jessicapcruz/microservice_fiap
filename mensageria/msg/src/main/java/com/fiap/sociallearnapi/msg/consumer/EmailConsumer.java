package com.fiap.sociallearnapi.msg.consumer;

import com.fiap.sociallearnapi.msg.model.Email;
import com.fiap.sociallearnapi.msg.request.EmailRequest;
import com.fiap.sociallearnapi.msg.service.EmailService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class EmailConsumer {

    @Autowired
    EmailService emailService;

    @RabbitListener(queues = "${spring.rabbitmq.queue}")
    public void receiveMessage(@Payload EmailRequest emailRequest) {
        var emailModel = emailRequest.toEntity();
        emailService.send(emailModel);
        System.out.println("Email Status Queue >> "+ emailModel.getStatusEmail().toString());
    }
}