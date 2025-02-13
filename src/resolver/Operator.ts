import { Resolver, Query, Arg } from 'type-graphql';
import { Operator } from '../models/Operator';
import { AppDataSource } from '../config/ormconfigs';

@Resolver(Operator)
export class OperatorResolver {
  private operatorRepository = AppDataSource.getRepository(Operator);

  @Query(() => [Operator])
  async operators(): Promise<Operator[]> {
    return await this.operatorRepository.find();
  }

  @Query(() => [Operator])
  async operatorsByHealthZone(
    @Arg('health_zone') health_zone: string
  ): Promise<Operator[]> {
    return await this.operatorRepository.find({
      where: {
        health_zone: health_zone
      }
    });
  }

  @Query(() => Operator)
  async operatorById(
    @Arg('id') id: string
  ): Promise<Operator | undefined> {
    const operator = await this.operatorRepository.findOne({
        where: {
            id: id
        }
    });
    return operator || undefined;
  }
}