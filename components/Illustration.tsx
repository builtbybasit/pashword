interface IProps {
  source: string;
  className: string;
  alt: string;
  sectionId?: string;
}

const Illustration = ({ source, className, alt, sectionId }: IProps) => {
  return (
    <div className={className} id={sectionId}>
      <img src={source} alt={alt} className="mx-auto" />
    </div>
  );
};

export default Illustration;
