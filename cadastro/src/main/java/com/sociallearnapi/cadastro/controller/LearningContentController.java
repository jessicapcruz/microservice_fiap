package com.sociallearnapi.cadastro.controller;


import com.sociallearnapi.cadastro.exceptions.ApiErrorException;
import com.sociallearnapi.cadastro.model.LearningContent;
import com.sociallearnapi.cadastro.request.LearningContentRequest;
import com.sociallearnapi.cadastro.response.LearningContentResponse;
import com.sociallearnapi.cadastro.service.LearningContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import java.util.stream.Collectors;

//@CrossOrigin(origins = "*", maxAge = 3600)
//@Api("LearningContent")
@RestController
@RequestMapping("/api/learningContents")
public class LearningContentController {
    @Autowired
    LearningContentService learningContentService;

    @ApiOperation(value = "Register learning content")
    @PostMapping("/register")
    public ResponseEntity<LearningContentResponse> schedule(
            @RequestBody LearningContentRequest learningContentRequest) {
        try {
            var savedLearningContent = learningContentService.save(learningContentRequest.toEntity());
            return ResponseEntity.ok().body(savedLearningContent.toResponse());
        } catch (ApiErrorException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).header(e.getMessage()).build();
        }
    }

    @ApiOperation(value = "Update learning content")
    @PutMapping("/update/{learningContentId}")
    public ResponseEntity<LearningContentResponse> update(@PathVariable String learningContentId,
                                                          @RequestBody LearningContentRequest learningContentRequest) {
        try {
            var learningContent =
                    learningContentService.update(learningContentId, learningContentRequest.toEntity());
            return ResponseEntity.ok().body(learningContent.toResponse());
        } catch (ApiErrorException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).header(e.getMessage()).build();
        }
    }

    @ApiOperation(value = "Inactivate learning content")
    @PutMapping("/inactivate/{learningContentId}")
    public ResponseEntity<LearningContentResponse> inactivate(@PathVariable String learningContentId) {
        try {
            var learningContent = learningContentService.inactivate(learningContentId);
            return ResponseEntity.ok().body(learningContent.toResponse());
        } catch (ApiErrorException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @ApiOperation(value = "Delete learning content")
    @DeleteMapping("/delete/{learningContentId}")
    public ResponseEntity<String> delete(@PathVariable String learningContentId) {
        try {
            learningContentService.deleteById(learningContentId);
            return ResponseEntity.ok().body("Learning content deleted");
        } catch (EmptyResultDataAccessException e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }
}