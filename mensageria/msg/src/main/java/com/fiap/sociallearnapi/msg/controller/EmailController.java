package com.fiap.sociallearnapi.msg.controller;

import com.fiap.sociallearnapi.msg.exceptions.ApiErrorException;
import com.fiap.sociallearnapi.msg.model.Email;
import com.fiap.sociallearnapi.msg.request.EmailResquest;
import com.fiap.sociallearnapi.msg.response.EmailResponse;
import com.fiap.sociallearnapi.msg.service.EmailService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/email")
public class EmailController {
    @Autowired
    EmailService emailService;

    @ApiOperation(value = "Sending e-mail")
    @PostMapping("/send")
    public ResponseEntity<EmailResponse> send(@RequestBody @Valid EmailResquest emailRequest){
        try {
            Email emailModel =  emailRequest.toEntity();
            Email sentEmail = emailService.send(emailModel);

            return new ResponseEntity<>(sentEmail.toResponse(), HttpStatus.CREATED);
        }
        catch (ApiErrorException e){
            e.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .header(e.getMessage()).build();
        }
    }

}
