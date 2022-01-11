package com.fiap.sociallearnapi.msg.request;

import com.fiap.sociallearnapi.msg.model.Email;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmailResquest {

    @NotBlank
    @javax.validation.constraints.Email
    private String To;
    @NotBlank
    private String Subject;
    @NotBlank
    private String Body;

    public Email toEntity() {
        return Email.builder()
                .To(getTo())
                .Subject(getSubject())
                .Body(getBody())
                .build();
    }
}
