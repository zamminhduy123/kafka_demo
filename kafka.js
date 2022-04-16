import {Kafka} from "kafkajs";

const kafka = new Kafka({
  clientId: "my-producer",
  brokers: ["localhost:9092", "localhost:9093", "localhost:9094"],
});

export default kafka;