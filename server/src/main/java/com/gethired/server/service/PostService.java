package com.gethired.server.service;

import com.gethired.server.dto.PostDTO;
import com.gethired.server.model.PostModal;

import java.util.List;

public interface PostService {

    public List<PostModal> getAllPosts();

    public PostModal savePost(PostDTO post);
}
