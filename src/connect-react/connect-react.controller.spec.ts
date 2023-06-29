import { Test, TestingModule } from '@nestjs/testing';
import { ConnectReactController } from './connect-react.controller';

describe('ConnectReactController', () => {
  let controller: ConnectReactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConnectReactController],
    }).compile();

    controller = module.get<ConnectReactController>(ConnectReactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
