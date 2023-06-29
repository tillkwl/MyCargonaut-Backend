import { VehicleModule } from './vehicle/vehicle.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import {
  DatabaseModule,
  TypeORMDatabaseModule,
} from './database/database.module';
import { UserModule } from './user/user.module';

import { OfferModule } from './offer/offer.module';
import { OfferService } from './offer/offer.service';
import { ProfileModule } from './profile/profile.module';
import { VehicleService } from './database/services/vehicle.service';
@Module({
  imports: [
    OfferModule,
    VehicleModule,
    AuthModule,
    DatabaseModule,
    UserModule,
    TypeORMDatabaseModule,
    ProfileModule,
  ],
  exports: [AuthModule, DatabaseModule, UserModule],
  providers: [OfferService, VehicleService]
})
export class AppModule {}
