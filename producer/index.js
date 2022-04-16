import kafka from '../kafka.js'

const producer = kafka.producer()

const run = async () => {
    // Producing
    await producer.connect()
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: 'Hello KafkaJS user!' },
      ],
    })
};


setInterval(run,3000)