import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className=" pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Shop Your Choice With Us
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Quick Cart 🛒
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                Your one-stop destination for effortless shopping. Find your 
                favorites easily and shop with convenience at Quick Cart
                </p>
              </div>
            </div>
          </div>

          <Link href={'/products'}>
          <div className="-mx-4 flex flex-wrap">
            <BlogCard 
              CardTitle="Explore the Latest Fashion Trends at Quick Cart"
              CardDescription="Discover the latest trends and timeless styles at Quick Cart Fashion. Elevate your wardrobe with our curated collection of clothing, accessories, and more"
              image="https://images.stylight.net/image/upload/t_web_post_500x667/q_auto,f_auto/post-fe97987addc6cf756be63a88fca675d08219e3368bdce5eb119a7c0e.webp"
            />
            <BlogCard
              CardTitle="Elevate Your Space with Quick Cart Furniture"
              CardDescription="Transform your home with stylish and functional furniture from Quick Cart. Explore our curated selection to find the perfect pieces to enhance every room."
              image="https://media.istockphoto.com/id/968086564/photo/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-to-grey-couch-real-photo.jpg?s=612x612&w=0&k=20&c=TfE8sZbX_XC4yIYEaRAJHrdIWjZqvRx3Crn0ygcr-h0="
            />
            <BlogCard
              CardTitle="Discover Cutting-Edge Electronics at Quick Cart"
              CardDescription="Experience innovation with Quick Cart's extensive range of electronics. From state-of-the-art gadgets to everyday essentials, find everything you need to stay connected and entertained"
              image="https://i.pinimg.com/564x/6a/bc/b7/6abcb7e8a4eb19eaabdc305b10706d43.jpg"
            />
          </div>
            </Link>
        </div>
      </section>
    </>
  );
}

const BlogCard = ({ image, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img
              src={image}
              alt=""
              className="w-full object-cover"
              // Adjust the height (h-64) as needed for your design
              // object-cover ensures the image covers the designated space without distortion
            />
          </div>
          <div>
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
