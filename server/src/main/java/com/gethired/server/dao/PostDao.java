package com.gethired.server.dao;

import com.gethired.server.model.PostModal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostDao extends MongoRepository<PostModal, String> {
}
