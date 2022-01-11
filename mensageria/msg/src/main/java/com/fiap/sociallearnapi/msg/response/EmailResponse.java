package com.fiap.sociallearnapi.msg.response;

import com.fiap.sociallearnapi.msg.model.StatusEmail;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class EmailResponse {
    private String Id;
    private String From;
    private String To;
    private String Subject;
    private String Body;

    private LocalDateTime SendDate;
    private StatusEmail StatusEmail;
}
