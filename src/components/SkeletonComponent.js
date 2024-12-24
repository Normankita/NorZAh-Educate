import Skeleton from 'react-loading-skeleton'

export const SkeletonComponent = () => {
  return (
    <div className="card">
      <p className="title">{<Skeleton/>}</p>
      <p className="description">{<Skeleton count={4}/>}</p>
      <p className="control">
        {<Skeleton width="70px"/>}
      </p>
    </div>
  )
}