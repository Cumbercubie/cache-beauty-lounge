import React from "react";
import CardWithImages from "../../components/atoms/card-with-images";
import FluidBox from "../../components/fluid-box/fluid-box";

export default function NailServicePage() {
  return (
    <div className="container mx-auto py-12">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FluidBox />
      </div>
      <CardWithImages
        imageSource={
          <img
            class="w-full h-[30rem]"
            src={"/images/appointment/face_flower.jpg"}
            alt=""
          />
        }
        title={"Nail Service"}
      >
        <div className="text-2xl my-2">Basic</div>
        <p className="my-5">
          Includes nail trimming and shaping, cuticle grooming, buffing, a
          lotion massage, hot towel service, and finished with your choice of
          color.
        </p>
        <div className="text-2xl my-2">Venetian – Our Signature:</div>
        <p>
          Relieve your hands with our salt and oil scrub to get rid of dead skin
          and dry cuticles to reveal healthier, and smoother skin. Then followed
          by a refreshing and invigorating paraffin treatment to nourish your
          skin with Vitamin E oil, ending with a sensual massage
        </p>
        <div className="text-2xl my-2">Secret</div>
        <p className="my-5">
          Relieve your hands with our salt and oil scrub to get rid of dead skin
          and dry cuticles to reveal healthier, and smoother skin. Then followed
          by a refreshing and invigorating paraffin treatment to nourish your
          skin with Vitamin E oil, ending with a sensual massage.
        </p>
      </CardWithImages>
    </div>
  );
}
