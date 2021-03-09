import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class HeroTable1615315120973 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'heroes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'level',
            type: 'integer',
          },
          {
            name: 'baseStrength',
            type: 'real',
          },
          {
            name: 'hpRegeneration',
            type: 'real',
          },
          {
            name: 'baseMaxHP',
            type: 'integer',
          },
          {
            name: 'baseAgility',
            type: 'real',
          },
          {
            name: 'attackSpeed',
            type: 'real',
          },
          {
            name: 'baseArmor',
            type: 'real',
          },
          {
            name: 'baseIntelligence',
            type: 'real',
          },
          {
            name: 'baseManaRegen',
            type: 'real',
          },
          {
            name: 'baseMaxMana',
            type: 'integer',
          },
          {
            name: 'baseAtackDamage',
            type: 'integer',
          },
          {
            name: 'attackRange',
            type: 'integer',
          },
          {
            name: 'baseMoveSpeed',
            type: 'integer',
          },
          {
            name: 'primaryAttribute_id',
            type: 'integer',
          },
          {
            name: 'strengthPerLevel',
            type: 'real',
          },
          {
            name: 'agilityPerLevel',
            type: 'real',
          },
          {
            name: 'intelligencePerLevel',
            type: 'real',
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('heroes');
  }
}
