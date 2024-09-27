import { Image, Flex } from "antd";

export default function Logo() {
  return (
    <Flex gap={"small"} style={{ marginLeft: "10px" }}>
      <Image
        height={35}
        width={"auto"}
        preview={false}
        alt="logo"
        draggable={false}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
      <h1 style={{ margin: "0" }}>React Design</h1>
    </Flex>
  );
}
