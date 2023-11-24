import pageHeaderBg from "./../assets/images/page-header-bg.jpg";

const PageHeader = ({ title = "Page Header", description }) => {
  return (
    <section
      style={{
        backgroundImage: `url("${pageHeaderBg}")`,
      }}
    >
      <div className="min-h-[300px] bg-[rgba(0,0,0,0.6)] py-28 flex justify-center items-center text-white">
        <div className="text-center max-w-4xl space-y-5">
          <h2 className="section-heading">{title}</h2>
          {description ? (
            <p className="max-w-3xl mx-auto text-lg">{description}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
