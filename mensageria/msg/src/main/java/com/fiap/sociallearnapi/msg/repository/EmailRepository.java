package com.fiap.sociallearnapi.msg.repository;

import com.fiap.sociallearnapi.msg.model.Email;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository extends MongoRepository<Email, String> {
}
