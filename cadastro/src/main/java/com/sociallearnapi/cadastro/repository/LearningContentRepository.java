package com.sociallearnapi.cadastro.repository;

import com.sociallearnapi.cadastro.model.LearningContent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearningContentRepository extends MongoRepository<LearningContent, String> {
}
