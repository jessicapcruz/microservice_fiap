package com.fiap.sociallearnapi.msg.model;

import com.fiap.sociallearnapi.msg.response.EmailResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document("email")
public class Email {

    @Id
    private String Id;
    private String From;
    private String To;
    private String Subject;
    private String Body;

    @CreatedDate
    private LocalDateTime SendDate;
    private StatusEmail StatusEmail;

    public EmailResponse toResponse() {
        return EmailResponse.builder()
                .Id(getId())
                .From(getFrom())
                .To(getTo())
                .Subject(getSubject())
                .SendDate(getSendDate())
                .StatusEmail(getStatusEmail())
                .build();
    }

}
