package com.MyFirstApplication.My.First.Application.service;


import com.MyFirstApplication.My.First.Application.dto.ReviewDTO;

import com.MyFirstApplication.My.First.Application.dto.VendorDTO;
import com.MyFirstApplication.My.First.Application.entity.Review;

import com.MyFirstApplication.My.First.Application.entity.Vendor;
import com.MyFirstApplication.My.First.Application.repo.ReviewRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ModelMapper modelMapper;


    public ReviewDTO saveReview(@Valid ReviewDTO reviewDTO){
        reviewRepository.save(modelMapper.map(reviewDTO,Review.class));
        return reviewDTO;
    }
    public List<ReviewDTO> getAllReviews(){
        List<Review>reviewList=reviewRepository.findAll();
        return modelMapper.map(reviewList,new TypeToken<List<ReviewDTO>>(){}.getType());

    }

    public ReviewDTO updateReview(@Valid ReviewDTO reviewDTO){
        reviewRepository.save(modelMapper.map(reviewDTO, Review.class));
        return reviewDTO;
    }

    public boolean deleteReview(@Valid ReviewDTO reviewDTO){
        reviewRepository.delete(modelMapper.map(reviewDTO, Review.class));
        return true;
    }
    public ReviewDTO getReviewByReviewID(@Valid Long id){
        Review review=reviewRepository.getReviewByReviewID(id);
        return modelMapper.map(review,ReviewDTO.class);
    }

    public boolean deleteReviewByReviewID(@Valid Long id){
        reviewRepository.deleteById(id);
        return true;
    }

    public ReviewDTO updateReviewByReviewID(@Valid Long id , @Valid ReviewDTO reviewDTO){
        Optional <Review> review=reviewRepository.findById(id);
        reviewRepository.save(modelMapper.map(reviewDTO, Review.class));
        return reviewDTO;
    }

    public ReviewDTO getLatestReviewByIndexNo(@Valid String indexNo) {
        Long latestReviewId = reviewRepository.findLatestReviewIdByIndexNo(indexNo);
        if (latestReviewId  != null) {
            Optional<Review> reviewOptional = reviewRepository.findById(latestReviewId);
            if (reviewOptional.isPresent()) {
                return modelMapper.map(reviewOptional.get(), ReviewDTO.class);
            }
        }
        return null;
    }
    public ReviewDTO getReviewByReviewIDAndIndex(@Valid Long id,@Valid String indexNo){
        Review review=reviewRepository.getReviewByReviewIDAndIndex(id,indexNo);
        return modelMapper.map(review,ReviewDTO.class);
    }
    public ReviewDTO getReviewByReviewDate(LocalDate dates) {
        Review review = reviewRepository.getReviewByReviewDate(dates);
        return modelMapper.map(review, ReviewDTO.class);
    }

}
