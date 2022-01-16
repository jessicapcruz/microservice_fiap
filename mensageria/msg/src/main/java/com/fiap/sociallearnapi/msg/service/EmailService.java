package com.fiap.sociallearnapi.msg.service;

import com.fiap.sociallearnapi.msg.exceptions.ApiErrorException;
import com.fiap.sociallearnapi.msg.model.Email;
import com.fiap.sociallearnapi.msg.model.StatusEmail;
import com.fiap.sociallearnapi.msg.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class EmailService {
    @Autowired
    EmailRepository emailRepository;

    @Autowired
    private JavaMailSender emailsender;

    public Email send(Email emailmodel) throws ApiErrorException {
        emailmodel.setSendDate(LocalDateTime.now());
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("fiap142021@outlook.pt");
            message.setTo(emailmodel.getTo());
            message.setSubject(emailmodel.getSubject());
            message.setText(emailmodel.getBody());
            emailsender.send(message);

            emailmodel.setStatusEmail(StatusEmail.SENT);
        } catch (MailException e){
            e.printStackTrace();
            emailmodel.setStatusEmail(StatusEmail.ERROR);
        } finally {
            return emailmodel;//emailRepository.save(emailmodel);
        }
    }
}
