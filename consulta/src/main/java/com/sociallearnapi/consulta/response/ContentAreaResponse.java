package com.sociallearnapi.cadastro.response;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ContentAreaResponse {
    private String id;
    private String name;
    private boolean active;
}

