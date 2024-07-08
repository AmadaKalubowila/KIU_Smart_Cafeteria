package com.MyFirstApplication.My.First.Application.controller;
import com.MyFirstApplication.My.First.Application.dto.ReviewDTO;
import com.MyFirstApplication.My.First.Application.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired ;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin
public class ReviewController {
    @Autowired
    private ReviewService reviewService;
    @GetMapping("/getReviews")
    public List<ReviewDTO> getReview(){

        return reviewService.getAllReviews();
    }
    @PostMapping("/saveReview")
    public ReviewDTO saveReview(@RequestBody ReviewDTO reviewDTO){

        return reviewService.saveReview(reviewDTO);
    }

    @PutMapping("/updateReview")
    public ReviewDTO updateReview(@RequestBody ReviewDTO reviewDTO){
        return reviewService.updateReview(reviewDTO);
    }

    @DeleteMapping("/deleteReview")
    public boolean deleteReview(@RequestBody ReviewDTO reviewDTO){
        return reviewService.deleteReview(reviewDTO);
    }
    @GetMapping( "/getReviewByReviewID/{id}")
    public ReviewDTO getReviewByReviewID (@PathVariable Long id){
        return reviewService.getReviewByReviewID (id);}

    @PutMapping("/updateReviewByReviewID/{id}")
    public ReviewDTO updateReviewByReviewID(@PathVariable Long id,@RequestBody ReviewDTO reviewDTO){
        return reviewService.updateReviewByReviewID(id,reviewDTO);
    }

    @DeleteMapping("/deleteReviewByReviewID/{id}")
    public boolean deleteReviewByReviewID(@PathVariable Long id){
        return reviewService.deleteReviewByReviewID(id);
    }


    @GetMapping( "/getReviewByReviewIDAndIndex/{id}/{indexNo}")
    public ReviewDTO getReviewByReviewIDAndIndex(@PathVariable Long id, @PathVariable String indexNo){
        System.out.println("Review id:"+id+"Review Index:"+indexNo);
        return reviewService.getReviewByReviewIDAndIndex(id,indexNo);}

    @GetMapping("/getReviewByReviewDate/{dates}")
    public ReviewDTO getReviewByReviewDate(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dates) {
        return reviewService.getReviewByReviewDate(dates);
    }


    @GetMapping("/getLatestReviewByIndexNo/{id}")
    public ResponseEntity<ReviewDTO> getLatestReviewByIndexNo(@PathVariable String indexNo) {
        ReviewDTO latestReview = reviewService.getLatestReviewByIndexNo(indexNo);
        if (latestReview != null) {
            return ResponseEntity.ok(latestReview);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
