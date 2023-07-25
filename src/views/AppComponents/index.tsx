import { Col, Row } from "antd";
import Button from "../../shared/components/Button";

import "./appComponents.scss";
const AppComponents = () => {
  return (
    <Row align="middle" justify="center" className="wrapper" gutter={[32, 32]}>
      <Col span={24}>App Components</Col>
      <Col>
        <Button type="primary">button</Button>
      </Col>
    </Row>
  );
};

export default AppComponents;
