import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import { LikeImg, DislikeImg } from "./assets"
import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCountContainer,
  Count,
  ImageControl,
  Image,
} from "./styles"

function Feedback() {
  const dispatch = useAppDispatch()
  const likes = useAppSelector(feedbackSliceSelectors.like)
  const onLike = () => {
    dispatch(feedbackSliceActions.like())
  }
  const dislikes = useAppSelector(feedbackSliceSelectors.dislike)
  const onDislike = () => {
    dispatch(feedbackSliceActions.dislikes())
  }
  const resetResults = () => {
    dispatch(feedbackSliceActions.reset())
  }

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCountContainer>
          <ImageControl onClick={onLike}>
            <Image src={LikeImg} alt="Like img" />
          </ImageControl>
          <Count>{likes}</Count>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <ImageControl onClick={onDislike}>
            <Image src={DislikeImg} alt="Dislike img" />
          </ImageControl>
          <Count>{dislikes}</Count>
        </ButtonWithCountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
