///
//  Generated code. Do not modify.
//  source: proto/myselfService.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'player.pb.dart' as $3;
import 'area.pb.dart' as $0;
import 'instrument.pb.dart' as $2;
import 'studio.pb.dart' as $4;

class GetMyselfDetailResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetMyselfDetailResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$3.PlayerDetail>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'detail', subBuilder: $3.PlayerDetail.create)
    ..hasRequiredFields = false
  ;

  GetMyselfDetailResponse._() : super();
  factory GetMyselfDetailResponse({
    $3.PlayerDetail? detail,
  }) {
    final _result = create();
    if (detail != null) {
      _result.detail = detail;
    }
    return _result;
  }
  factory GetMyselfDetailResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetMyselfDetailResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetMyselfDetailResponse clone() => GetMyselfDetailResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetMyselfDetailResponse copyWith(void Function(GetMyselfDetailResponse) updates) => super.copyWith((message) => updates(message as GetMyselfDetailResponse)) as GetMyselfDetailResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailResponse create() => GetMyselfDetailResponse._();
  GetMyselfDetailResponse createEmptyInstance() => create();
  static $pb.PbList<GetMyselfDetailResponse> createRepeated() => $pb.PbList<GetMyselfDetailResponse>();
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetMyselfDetailResponse>(create);
  static GetMyselfDetailResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $3.PlayerDetail get detail => $_getN(0);
  @$pb.TagNumber(1)
  set detail($3.PlayerDetail v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasDetail() => $_has(0);
  @$pb.TagNumber(1)
  void clearDetail() => clearField(1);
  @$pb.TagNumber(1)
  $3.PlayerDetail ensureDetail() => $_ensure(0);
}

class PutMyselfDetailRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutMyselfDetailRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$3.PlayerDetail>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'detail', subBuilder: $3.PlayerDetail.create)
    ..hasRequiredFields = false
  ;

  PutMyselfDetailRequest._() : super();
  factory PutMyselfDetailRequest({
    $3.PlayerDetail? detail,
  }) {
    final _result = create();
    if (detail != null) {
      _result.detail = detail;
    }
    return _result;
  }
  factory PutMyselfDetailRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutMyselfDetailRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutMyselfDetailRequest clone() => PutMyselfDetailRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutMyselfDetailRequest copyWith(void Function(PutMyselfDetailRequest) updates) => super.copyWith((message) => updates(message as PutMyselfDetailRequest)) as PutMyselfDetailRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutMyselfDetailRequest create() => PutMyselfDetailRequest._();
  PutMyselfDetailRequest createEmptyInstance() => create();
  static $pb.PbList<PutMyselfDetailRequest> createRepeated() => $pb.PbList<PutMyselfDetailRequest>();
  @$core.pragma('dart2js:noInline')
  static PutMyselfDetailRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutMyselfDetailRequest>(create);
  static PutMyselfDetailRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $3.PlayerDetail get detail => $_getN(0);
  @$pb.TagNumber(1)
  set detail($3.PlayerDetail v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasDetail() => $_has(0);
  @$pb.TagNumber(1)
  void clearDetail() => clearField(1);
  @$pb.TagNumber(1)
  $3.PlayerDetail ensureDetail() => $_ensure(0);
}

class PutMyselfDetailResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutMyselfDetailResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$3.PlayerDetail>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'detail', subBuilder: $3.PlayerDetail.create)
    ..hasRequiredFields = false
  ;

  PutMyselfDetailResponse._() : super();
  factory PutMyselfDetailResponse({
    $3.PlayerDetail? detail,
  }) {
    final _result = create();
    if (detail != null) {
      _result.detail = detail;
    }
    return _result;
  }
  factory PutMyselfDetailResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutMyselfDetailResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutMyselfDetailResponse clone() => PutMyselfDetailResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutMyselfDetailResponse copyWith(void Function(PutMyselfDetailResponse) updates) => super.copyWith((message) => updates(message as PutMyselfDetailResponse)) as PutMyselfDetailResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutMyselfDetailResponse create() => PutMyselfDetailResponse._();
  PutMyselfDetailResponse createEmptyInstance() => create();
  static $pb.PbList<PutMyselfDetailResponse> createRepeated() => $pb.PbList<PutMyselfDetailResponse>();
  @$core.pragma('dart2js:noInline')
  static PutMyselfDetailResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutMyselfDetailResponse>(create);
  static PutMyselfDetailResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $3.PlayerDetail get detail => $_getN(0);
  @$pb.TagNumber(1)
  set detail($3.PlayerDetail v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasDetail() => $_has(0);
  @$pb.TagNumber(1)
  void clearDetail() => clearField(1);
  @$pb.TagNumber(1)
  $3.PlayerDetail ensureDetail() => $_ensure(0);
}

class GetMyselfDetailAreaResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetMyselfDetailAreaResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  GetMyselfDetailAreaResponse._() : super();
  factory GetMyselfDetailAreaResponse({
    $core.Iterable<$0.City>? cities,
  }) {
    final _result = create();
    if (cities != null) {
      _result.cities.addAll(cities);
    }
    return _result;
  }
  factory GetMyselfDetailAreaResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetMyselfDetailAreaResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetMyselfDetailAreaResponse clone() => GetMyselfDetailAreaResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetMyselfDetailAreaResponse copyWith(void Function(GetMyselfDetailAreaResponse) updates) => super.copyWith((message) => updates(message as GetMyselfDetailAreaResponse)) as GetMyselfDetailAreaResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailAreaResponse create() => GetMyselfDetailAreaResponse._();
  GetMyselfDetailAreaResponse createEmptyInstance() => create();
  static $pb.PbList<GetMyselfDetailAreaResponse> createRepeated() => $pb.PbList<GetMyselfDetailAreaResponse>();
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailAreaResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetMyselfDetailAreaResponse>(create);
  static GetMyselfDetailAreaResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

class PostMyselfDetailAreaRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostMyselfDetailAreaRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cityId', protoName: 'cityId')
    ..hasRequiredFields = false
  ;

  PostMyselfDetailAreaRequest._() : super();
  factory PostMyselfDetailAreaRequest({
    $core.String? cityId,
  }) {
    final _result = create();
    if (cityId != null) {
      _result.cityId = cityId;
    }
    return _result;
  }
  factory PostMyselfDetailAreaRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostMyselfDetailAreaRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostMyselfDetailAreaRequest clone() => PostMyselfDetailAreaRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostMyselfDetailAreaRequest copyWith(void Function(PostMyselfDetailAreaRequest) updates) => super.copyWith((message) => updates(message as PostMyselfDetailAreaRequest)) as PostMyselfDetailAreaRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostMyselfDetailAreaRequest create() => PostMyselfDetailAreaRequest._();
  PostMyselfDetailAreaRequest createEmptyInstance() => create();
  static $pb.PbList<PostMyselfDetailAreaRequest> createRepeated() => $pb.PbList<PostMyselfDetailAreaRequest>();
  @$core.pragma('dart2js:noInline')
  static PostMyselfDetailAreaRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostMyselfDetailAreaRequest>(create);
  static PostMyselfDetailAreaRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get cityId => $_getSZ(0);
  @$pb.TagNumber(1)
  set cityId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCityId() => $_has(0);
  @$pb.TagNumber(1)
  void clearCityId() => clearField(1);
}

class PostMyselfDetailAreaResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostMyselfDetailAreaResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  PostMyselfDetailAreaResponse._() : super();
  factory PostMyselfDetailAreaResponse({
    $core.Iterable<$0.City>? cities,
  }) {
    final _result = create();
    if (cities != null) {
      _result.cities.addAll(cities);
    }
    return _result;
  }
  factory PostMyselfDetailAreaResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostMyselfDetailAreaResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostMyselfDetailAreaResponse clone() => PostMyselfDetailAreaResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostMyselfDetailAreaResponse copyWith(void Function(PostMyselfDetailAreaResponse) updates) => super.copyWith((message) => updates(message as PostMyselfDetailAreaResponse)) as PostMyselfDetailAreaResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostMyselfDetailAreaResponse create() => PostMyselfDetailAreaResponse._();
  PostMyselfDetailAreaResponse createEmptyInstance() => create();
  static $pb.PbList<PostMyselfDetailAreaResponse> createRepeated() => $pb.PbList<PostMyselfDetailAreaResponse>();
  @$core.pragma('dart2js:noInline')
  static PostMyselfDetailAreaResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostMyselfDetailAreaResponse>(create);
  static PostMyselfDetailAreaResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

class DeleteMyselfDetailAreaRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DeleteMyselfDetailAreaRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cityId', protoName: 'cityId')
    ..hasRequiredFields = false
  ;

  DeleteMyselfDetailAreaRequest._() : super();
  factory DeleteMyselfDetailAreaRequest({
    $core.String? cityId,
  }) {
    final _result = create();
    if (cityId != null) {
      _result.cityId = cityId;
    }
    return _result;
  }
  factory DeleteMyselfDetailAreaRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeleteMyselfDetailAreaRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailAreaRequest clone() => DeleteMyselfDetailAreaRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailAreaRequest copyWith(void Function(DeleteMyselfDetailAreaRequest) updates) => super.copyWith((message) => updates(message as DeleteMyselfDetailAreaRequest)) as DeleteMyselfDetailAreaRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailAreaRequest create() => DeleteMyselfDetailAreaRequest._();
  DeleteMyselfDetailAreaRequest createEmptyInstance() => create();
  static $pb.PbList<DeleteMyselfDetailAreaRequest> createRepeated() => $pb.PbList<DeleteMyselfDetailAreaRequest>();
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailAreaRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeleteMyselfDetailAreaRequest>(create);
  static DeleteMyselfDetailAreaRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get cityId => $_getSZ(0);
  @$pb.TagNumber(1)
  set cityId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCityId() => $_has(0);
  @$pb.TagNumber(1)
  void clearCityId() => clearField(1);
}

class DeleteMyselfDetailAreaResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DeleteMyselfDetailAreaResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  DeleteMyselfDetailAreaResponse._() : super();
  factory DeleteMyselfDetailAreaResponse({
    $core.Iterable<$0.City>? cities,
  }) {
    final _result = create();
    if (cities != null) {
      _result.cities.addAll(cities);
    }
    return _result;
  }
  factory DeleteMyselfDetailAreaResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeleteMyselfDetailAreaResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailAreaResponse clone() => DeleteMyselfDetailAreaResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailAreaResponse copyWith(void Function(DeleteMyselfDetailAreaResponse) updates) => super.copyWith((message) => updates(message as DeleteMyselfDetailAreaResponse)) as DeleteMyselfDetailAreaResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailAreaResponse create() => DeleteMyselfDetailAreaResponse._();
  DeleteMyselfDetailAreaResponse createEmptyInstance() => create();
  static $pb.PbList<DeleteMyselfDetailAreaResponse> createRepeated() => $pb.PbList<DeleteMyselfDetailAreaResponse>();
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailAreaResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeleteMyselfDetailAreaResponse>(create);
  static DeleteMyselfDetailAreaResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

class PutMyselfDetailAreaRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutMyselfDetailAreaRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pPS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cityIds', protoName: 'cityIds')
    ..hasRequiredFields = false
  ;

  PutMyselfDetailAreaRequest._() : super();
  factory PutMyselfDetailAreaRequest({
    $core.Iterable<$core.String>? cityIds,
  }) {
    final _result = create();
    if (cityIds != null) {
      _result.cityIds.addAll(cityIds);
    }
    return _result;
  }
  factory PutMyselfDetailAreaRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutMyselfDetailAreaRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutMyselfDetailAreaRequest clone() => PutMyselfDetailAreaRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutMyselfDetailAreaRequest copyWith(void Function(PutMyselfDetailAreaRequest) updates) => super.copyWith((message) => updates(message as PutMyselfDetailAreaRequest)) as PutMyselfDetailAreaRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutMyselfDetailAreaRequest create() => PutMyselfDetailAreaRequest._();
  PutMyselfDetailAreaRequest createEmptyInstance() => create();
  static $pb.PbList<PutMyselfDetailAreaRequest> createRepeated() => $pb.PbList<PutMyselfDetailAreaRequest>();
  @$core.pragma('dart2js:noInline')
  static PutMyselfDetailAreaRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutMyselfDetailAreaRequest>(create);
  static PutMyselfDetailAreaRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.String> get cityIds => $_getList(0);
}

class PutMyselfDetailAreaResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutMyselfDetailAreaResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  PutMyselfDetailAreaResponse._() : super();
  factory PutMyselfDetailAreaResponse({
    $core.Iterable<$0.City>? cities,
  }) {
    final _result = create();
    if (cities != null) {
      _result.cities.addAll(cities);
    }
    return _result;
  }
  factory PutMyselfDetailAreaResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutMyselfDetailAreaResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutMyselfDetailAreaResponse clone() => PutMyselfDetailAreaResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutMyselfDetailAreaResponse copyWith(void Function(PutMyselfDetailAreaResponse) updates) => super.copyWith((message) => updates(message as PutMyselfDetailAreaResponse)) as PutMyselfDetailAreaResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutMyselfDetailAreaResponse create() => PutMyselfDetailAreaResponse._();
  PutMyselfDetailAreaResponse createEmptyInstance() => create();
  static $pb.PbList<PutMyselfDetailAreaResponse> createRepeated() => $pb.PbList<PutMyselfDetailAreaResponse>();
  @$core.pragma('dart2js:noInline')
  static PutMyselfDetailAreaResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutMyselfDetailAreaResponse>(create);
  static PutMyselfDetailAreaResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

class GetMyselDetailInstrumentResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetMyselDetailInstrumentResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$2.Instrument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instruments', $pb.PbFieldType.PM, subBuilder: $2.Instrument.create)
    ..hasRequiredFields = false
  ;

  GetMyselDetailInstrumentResponse._() : super();
  factory GetMyselDetailInstrumentResponse({
    $core.Iterable<$2.Instrument>? instruments,
  }) {
    final _result = create();
    if (instruments != null) {
      _result.instruments.addAll(instruments);
    }
    return _result;
  }
  factory GetMyselDetailInstrumentResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetMyselDetailInstrumentResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetMyselDetailInstrumentResponse clone() => GetMyselDetailInstrumentResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetMyselDetailInstrumentResponse copyWith(void Function(GetMyselDetailInstrumentResponse) updates) => super.copyWith((message) => updates(message as GetMyselDetailInstrumentResponse)) as GetMyselDetailInstrumentResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetMyselDetailInstrumentResponse create() => GetMyselDetailInstrumentResponse._();
  GetMyselDetailInstrumentResponse createEmptyInstance() => create();
  static $pb.PbList<GetMyselDetailInstrumentResponse> createRepeated() => $pb.PbList<GetMyselDetailInstrumentResponse>();
  @$core.pragma('dart2js:noInline')
  static GetMyselDetailInstrumentResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetMyselDetailInstrumentResponse>(create);
  static GetMyselDetailInstrumentResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Instrument> get instruments => $_getList(0);
}

class PostMyselDetailInstrumentRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostMyselDetailInstrumentRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instrumentId', $pb.PbFieldType.O3, protoName: 'instrumentId')
    ..hasRequiredFields = false
  ;

  PostMyselDetailInstrumentRequest._() : super();
  factory PostMyselDetailInstrumentRequest({
    $core.int? instrumentId,
  }) {
    final _result = create();
    if (instrumentId != null) {
      _result.instrumentId = instrumentId;
    }
    return _result;
  }
  factory PostMyselDetailInstrumentRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostMyselDetailInstrumentRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostMyselDetailInstrumentRequest clone() => PostMyselDetailInstrumentRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostMyselDetailInstrumentRequest copyWith(void Function(PostMyselDetailInstrumentRequest) updates) => super.copyWith((message) => updates(message as PostMyselDetailInstrumentRequest)) as PostMyselDetailInstrumentRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostMyselDetailInstrumentRequest create() => PostMyselDetailInstrumentRequest._();
  PostMyselDetailInstrumentRequest createEmptyInstance() => create();
  static $pb.PbList<PostMyselDetailInstrumentRequest> createRepeated() => $pb.PbList<PostMyselDetailInstrumentRequest>();
  @$core.pragma('dart2js:noInline')
  static PostMyselDetailInstrumentRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostMyselDetailInstrumentRequest>(create);
  static PostMyselDetailInstrumentRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get instrumentId => $_getIZ(0);
  @$pb.TagNumber(1)
  set instrumentId($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasInstrumentId() => $_has(0);
  @$pb.TagNumber(1)
  void clearInstrumentId() => clearField(1);
}

class PostMyselDetailInstrumentResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostMyselDetailInstrumentResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$2.Instrument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instruments', $pb.PbFieldType.PM, subBuilder: $2.Instrument.create)
    ..hasRequiredFields = false
  ;

  PostMyselDetailInstrumentResponse._() : super();
  factory PostMyselDetailInstrumentResponse({
    $core.Iterable<$2.Instrument>? instruments,
  }) {
    final _result = create();
    if (instruments != null) {
      _result.instruments.addAll(instruments);
    }
    return _result;
  }
  factory PostMyselDetailInstrumentResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostMyselDetailInstrumentResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostMyselDetailInstrumentResponse clone() => PostMyselDetailInstrumentResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostMyselDetailInstrumentResponse copyWith(void Function(PostMyselDetailInstrumentResponse) updates) => super.copyWith((message) => updates(message as PostMyselDetailInstrumentResponse)) as PostMyselDetailInstrumentResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostMyselDetailInstrumentResponse create() => PostMyselDetailInstrumentResponse._();
  PostMyselDetailInstrumentResponse createEmptyInstance() => create();
  static $pb.PbList<PostMyselDetailInstrumentResponse> createRepeated() => $pb.PbList<PostMyselDetailInstrumentResponse>();
  @$core.pragma('dart2js:noInline')
  static PostMyselDetailInstrumentResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostMyselDetailInstrumentResponse>(create);
  static PostMyselDetailInstrumentResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Instrument> get instruments => $_getList(0);
}

class PutMyselDetailInstrumentRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutMyselDetailInstrumentRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..p<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instrumentIds', $pb.PbFieldType.P3, protoName: 'instrumentIds')
    ..hasRequiredFields = false
  ;

  PutMyselDetailInstrumentRequest._() : super();
  factory PutMyselDetailInstrumentRequest({
    $core.Iterable<$core.int>? instrumentIds,
  }) {
    final _result = create();
    if (instrumentIds != null) {
      _result.instrumentIds.addAll(instrumentIds);
    }
    return _result;
  }
  factory PutMyselDetailInstrumentRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutMyselDetailInstrumentRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutMyselDetailInstrumentRequest clone() => PutMyselDetailInstrumentRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutMyselDetailInstrumentRequest copyWith(void Function(PutMyselDetailInstrumentRequest) updates) => super.copyWith((message) => updates(message as PutMyselDetailInstrumentRequest)) as PutMyselDetailInstrumentRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutMyselDetailInstrumentRequest create() => PutMyselDetailInstrumentRequest._();
  PutMyselDetailInstrumentRequest createEmptyInstance() => create();
  static $pb.PbList<PutMyselDetailInstrumentRequest> createRepeated() => $pb.PbList<PutMyselDetailInstrumentRequest>();
  @$core.pragma('dart2js:noInline')
  static PutMyselDetailInstrumentRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutMyselDetailInstrumentRequest>(create);
  static PutMyselDetailInstrumentRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get instrumentIds => $_getList(0);
}

class PutMyselDetailInstrumentResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutMyselDetailInstrumentResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$2.Instrument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instruments', $pb.PbFieldType.PM, subBuilder: $2.Instrument.create)
    ..hasRequiredFields = false
  ;

  PutMyselDetailInstrumentResponse._() : super();
  factory PutMyselDetailInstrumentResponse({
    $core.Iterable<$2.Instrument>? instruments,
  }) {
    final _result = create();
    if (instruments != null) {
      _result.instruments.addAll(instruments);
    }
    return _result;
  }
  factory PutMyselDetailInstrumentResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutMyselDetailInstrumentResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutMyselDetailInstrumentResponse clone() => PutMyselDetailInstrumentResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutMyselDetailInstrumentResponse copyWith(void Function(PutMyselDetailInstrumentResponse) updates) => super.copyWith((message) => updates(message as PutMyselDetailInstrumentResponse)) as PutMyselDetailInstrumentResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutMyselDetailInstrumentResponse create() => PutMyselDetailInstrumentResponse._();
  PutMyselDetailInstrumentResponse createEmptyInstance() => create();
  static $pb.PbList<PutMyselDetailInstrumentResponse> createRepeated() => $pb.PbList<PutMyselDetailInstrumentResponse>();
  @$core.pragma('dart2js:noInline')
  static PutMyselDetailInstrumentResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutMyselDetailInstrumentResponse>(create);
  static PutMyselDetailInstrumentResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Instrument> get instruments => $_getList(0);
}

class DeleteMyselDetailInstrumentRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DeleteMyselDetailInstrumentRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instrumentId', $pb.PbFieldType.O3, protoName: 'instrumentId')
    ..hasRequiredFields = false
  ;

  DeleteMyselDetailInstrumentRequest._() : super();
  factory DeleteMyselDetailInstrumentRequest({
    $core.int? instrumentId,
  }) {
    final _result = create();
    if (instrumentId != null) {
      _result.instrumentId = instrumentId;
    }
    return _result;
  }
  factory DeleteMyselDetailInstrumentRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeleteMyselDetailInstrumentRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeleteMyselDetailInstrumentRequest clone() => DeleteMyselDetailInstrumentRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeleteMyselDetailInstrumentRequest copyWith(void Function(DeleteMyselDetailInstrumentRequest) updates) => super.copyWith((message) => updates(message as DeleteMyselDetailInstrumentRequest)) as DeleteMyselDetailInstrumentRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DeleteMyselDetailInstrumentRequest create() => DeleteMyselDetailInstrumentRequest._();
  DeleteMyselDetailInstrumentRequest createEmptyInstance() => create();
  static $pb.PbList<DeleteMyselDetailInstrumentRequest> createRepeated() => $pb.PbList<DeleteMyselDetailInstrumentRequest>();
  @$core.pragma('dart2js:noInline')
  static DeleteMyselDetailInstrumentRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeleteMyselDetailInstrumentRequest>(create);
  static DeleteMyselDetailInstrumentRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get instrumentId => $_getIZ(0);
  @$pb.TagNumber(1)
  set instrumentId($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasInstrumentId() => $_has(0);
  @$pb.TagNumber(1)
  void clearInstrumentId() => clearField(1);
}

class DeleteMyselDetailInstrumentResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DeleteMyselDetailInstrumentResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$2.Instrument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instruments', $pb.PbFieldType.PM, subBuilder: $2.Instrument.create)
    ..hasRequiredFields = false
  ;

  DeleteMyselDetailInstrumentResponse._() : super();
  factory DeleteMyselDetailInstrumentResponse({
    $core.Iterable<$2.Instrument>? instruments,
  }) {
    final _result = create();
    if (instruments != null) {
      _result.instruments.addAll(instruments);
    }
    return _result;
  }
  factory DeleteMyselDetailInstrumentResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeleteMyselDetailInstrumentResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeleteMyselDetailInstrumentResponse clone() => DeleteMyselDetailInstrumentResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeleteMyselDetailInstrumentResponse copyWith(void Function(DeleteMyselDetailInstrumentResponse) updates) => super.copyWith((message) => updates(message as DeleteMyselDetailInstrumentResponse)) as DeleteMyselDetailInstrumentResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DeleteMyselDetailInstrumentResponse create() => DeleteMyselDetailInstrumentResponse._();
  DeleteMyselDetailInstrumentResponse createEmptyInstance() => create();
  static $pb.PbList<DeleteMyselDetailInstrumentResponse> createRepeated() => $pb.PbList<DeleteMyselDetailInstrumentResponse>();
  @$core.pragma('dart2js:noInline')
  static DeleteMyselDetailInstrumentResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeleteMyselDetailInstrumentResponse>(create);
  static DeleteMyselDetailInstrumentResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Instrument> get instruments => $_getList(0);
}

class GetMyselfDetailStudioResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetMyselfDetailStudioResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$4.Studio>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studios', $pb.PbFieldType.PM, subBuilder: $4.Studio.create)
    ..hasRequiredFields = false
  ;

  GetMyselfDetailStudioResponse._() : super();
  factory GetMyselfDetailStudioResponse({
    $core.Iterable<$4.Studio>? studios,
  }) {
    final _result = create();
    if (studios != null) {
      _result.studios.addAll(studios);
    }
    return _result;
  }
  factory GetMyselfDetailStudioResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetMyselfDetailStudioResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetMyselfDetailStudioResponse clone() => GetMyselfDetailStudioResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetMyselfDetailStudioResponse copyWith(void Function(GetMyselfDetailStudioResponse) updates) => super.copyWith((message) => updates(message as GetMyselfDetailStudioResponse)) as GetMyselfDetailStudioResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailStudioResponse create() => GetMyselfDetailStudioResponse._();
  GetMyselfDetailStudioResponse createEmptyInstance() => create();
  static $pb.PbList<GetMyselfDetailStudioResponse> createRepeated() => $pb.PbList<GetMyselfDetailStudioResponse>();
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailStudioResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetMyselfDetailStudioResponse>(create);
  static GetMyselfDetailStudioResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$4.Studio> get studios => $_getList(0);
}

class PostMyselDetailStudioRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostMyselDetailStudioRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studioId', $pb.PbFieldType.O3, protoName: 'studioId')
    ..hasRequiredFields = false
  ;

  PostMyselDetailStudioRequest._() : super();
  factory PostMyselDetailStudioRequest({
    $core.int? studioId,
  }) {
    final _result = create();
    if (studioId != null) {
      _result.studioId = studioId;
    }
    return _result;
  }
  factory PostMyselDetailStudioRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostMyselDetailStudioRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostMyselDetailStudioRequest clone() => PostMyselDetailStudioRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostMyselDetailStudioRequest copyWith(void Function(PostMyselDetailStudioRequest) updates) => super.copyWith((message) => updates(message as PostMyselDetailStudioRequest)) as PostMyselDetailStudioRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostMyselDetailStudioRequest create() => PostMyselDetailStudioRequest._();
  PostMyselDetailStudioRequest createEmptyInstance() => create();
  static $pb.PbList<PostMyselDetailStudioRequest> createRepeated() => $pb.PbList<PostMyselDetailStudioRequest>();
  @$core.pragma('dart2js:noInline')
  static PostMyselDetailStudioRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostMyselDetailStudioRequest>(create);
  static PostMyselDetailStudioRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get studioId => $_getIZ(0);
  @$pb.TagNumber(1)
  set studioId($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasStudioId() => $_has(0);
  @$pb.TagNumber(1)
  void clearStudioId() => clearField(1);
}

class PostMyselDetailStudioResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostMyselDetailStudioResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$4.Studio>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studios', $pb.PbFieldType.PM, subBuilder: $4.Studio.create)
    ..hasRequiredFields = false
  ;

  PostMyselDetailStudioResponse._() : super();
  factory PostMyselDetailStudioResponse({
    $core.Iterable<$4.Studio>? studios,
  }) {
    final _result = create();
    if (studios != null) {
      _result.studios.addAll(studios);
    }
    return _result;
  }
  factory PostMyselDetailStudioResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostMyselDetailStudioResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostMyselDetailStudioResponse clone() => PostMyselDetailStudioResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostMyselDetailStudioResponse copyWith(void Function(PostMyselDetailStudioResponse) updates) => super.copyWith((message) => updates(message as PostMyselDetailStudioResponse)) as PostMyselDetailStudioResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostMyselDetailStudioResponse create() => PostMyselDetailStudioResponse._();
  PostMyselDetailStudioResponse createEmptyInstance() => create();
  static $pb.PbList<PostMyselDetailStudioResponse> createRepeated() => $pb.PbList<PostMyselDetailStudioResponse>();
  @$core.pragma('dart2js:noInline')
  static PostMyselDetailStudioResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostMyselDetailStudioResponse>(create);
  static PostMyselDetailStudioResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$4.Studio> get studios => $_getList(0);
}

class PutMyselDetailStudioRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutMyselDetailStudioRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..p<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studioIds', $pb.PbFieldType.P3, protoName: 'studioIds')
    ..hasRequiredFields = false
  ;

  PutMyselDetailStudioRequest._() : super();
  factory PutMyselDetailStudioRequest({
    $core.Iterable<$core.int>? studioIds,
  }) {
    final _result = create();
    if (studioIds != null) {
      _result.studioIds.addAll(studioIds);
    }
    return _result;
  }
  factory PutMyselDetailStudioRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutMyselDetailStudioRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutMyselDetailStudioRequest clone() => PutMyselDetailStudioRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutMyselDetailStudioRequest copyWith(void Function(PutMyselDetailStudioRequest) updates) => super.copyWith((message) => updates(message as PutMyselDetailStudioRequest)) as PutMyselDetailStudioRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutMyselDetailStudioRequest create() => PutMyselDetailStudioRequest._();
  PutMyselDetailStudioRequest createEmptyInstance() => create();
  static $pb.PbList<PutMyselDetailStudioRequest> createRepeated() => $pb.PbList<PutMyselDetailStudioRequest>();
  @$core.pragma('dart2js:noInline')
  static PutMyselDetailStudioRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutMyselDetailStudioRequest>(create);
  static PutMyselDetailStudioRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get studioIds => $_getList(0);
}

class PutMyselDetailStudioResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutMyselDetailStudioResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$2.Instrument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studios', $pb.PbFieldType.PM, subBuilder: $2.Instrument.create)
    ..hasRequiredFields = false
  ;

  PutMyselDetailStudioResponse._() : super();
  factory PutMyselDetailStudioResponse({
    $core.Iterable<$2.Instrument>? studios,
  }) {
    final _result = create();
    if (studios != null) {
      _result.studios.addAll(studios);
    }
    return _result;
  }
  factory PutMyselDetailStudioResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutMyselDetailStudioResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutMyselDetailStudioResponse clone() => PutMyselDetailStudioResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutMyselDetailStudioResponse copyWith(void Function(PutMyselDetailStudioResponse) updates) => super.copyWith((message) => updates(message as PutMyselDetailStudioResponse)) as PutMyselDetailStudioResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutMyselDetailStudioResponse create() => PutMyselDetailStudioResponse._();
  PutMyselDetailStudioResponse createEmptyInstance() => create();
  static $pb.PbList<PutMyselDetailStudioResponse> createRepeated() => $pb.PbList<PutMyselDetailStudioResponse>();
  @$core.pragma('dart2js:noInline')
  static PutMyselDetailStudioResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutMyselDetailStudioResponse>(create);
  static PutMyselDetailStudioResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Instrument> get studios => $_getList(0);
}

class DeleteMyselfDetailStudioRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DeleteMyselfDetailStudioRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studioId', $pb.PbFieldType.O3, protoName: 'studioId')
    ..hasRequiredFields = false
  ;

  DeleteMyselfDetailStudioRequest._() : super();
  factory DeleteMyselfDetailStudioRequest({
    $core.int? studioId,
  }) {
    final _result = create();
    if (studioId != null) {
      _result.studioId = studioId;
    }
    return _result;
  }
  factory DeleteMyselfDetailStudioRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeleteMyselfDetailStudioRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailStudioRequest clone() => DeleteMyselfDetailStudioRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailStudioRequest copyWith(void Function(DeleteMyselfDetailStudioRequest) updates) => super.copyWith((message) => updates(message as DeleteMyselfDetailStudioRequest)) as DeleteMyselfDetailStudioRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailStudioRequest create() => DeleteMyselfDetailStudioRequest._();
  DeleteMyselfDetailStudioRequest createEmptyInstance() => create();
  static $pb.PbList<DeleteMyselfDetailStudioRequest> createRepeated() => $pb.PbList<DeleteMyselfDetailStudioRequest>();
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailStudioRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeleteMyselfDetailStudioRequest>(create);
  static DeleteMyselfDetailStudioRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get studioId => $_getIZ(0);
  @$pb.TagNumber(1)
  set studioId($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasStudioId() => $_has(0);
  @$pb.TagNumber(1)
  void clearStudioId() => clearField(1);
}

class DeleteMyselDetailStudioResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DeleteMyselDetailStudioResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$4.Studio>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studios', $pb.PbFieldType.PM, subBuilder: $4.Studio.create)
    ..hasRequiredFields = false
  ;

  DeleteMyselDetailStudioResponse._() : super();
  factory DeleteMyselDetailStudioResponse({
    $core.Iterable<$4.Studio>? studios,
  }) {
    final _result = create();
    if (studios != null) {
      _result.studios.addAll(studios);
    }
    return _result;
  }
  factory DeleteMyselDetailStudioResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeleteMyselDetailStudioResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeleteMyselDetailStudioResponse clone() => DeleteMyselDetailStudioResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeleteMyselDetailStudioResponse copyWith(void Function(DeleteMyselDetailStudioResponse) updates) => super.copyWith((message) => updates(message as DeleteMyselDetailStudioResponse)) as DeleteMyselDetailStudioResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DeleteMyselDetailStudioResponse create() => DeleteMyselDetailStudioResponse._();
  DeleteMyselDetailStudioResponse createEmptyInstance() => create();
  static $pb.PbList<DeleteMyselDetailStudioResponse> createRepeated() => $pb.PbList<DeleteMyselDetailStudioResponse>();
  @$core.pragma('dart2js:noInline')
  static DeleteMyselDetailStudioResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeleteMyselDetailStudioResponse>(create);
  static DeleteMyselDetailStudioResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$4.Studio> get studios => $_getList(0);
}

class GetMyselfDetailFollowersResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetMyselfDetailFollowersResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$3.Player>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'players', $pb.PbFieldType.PM, subBuilder: $3.Player.create)
    ..hasRequiredFields = false
  ;

  GetMyselfDetailFollowersResponse._() : super();
  factory GetMyselfDetailFollowersResponse({
    $core.Iterable<$3.Player>? players,
  }) {
    final _result = create();
    if (players != null) {
      _result.players.addAll(players);
    }
    return _result;
  }
  factory GetMyselfDetailFollowersResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetMyselfDetailFollowersResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetMyselfDetailFollowersResponse clone() => GetMyselfDetailFollowersResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetMyselfDetailFollowersResponse copyWith(void Function(GetMyselfDetailFollowersResponse) updates) => super.copyWith((message) => updates(message as GetMyselfDetailFollowersResponse)) as GetMyselfDetailFollowersResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailFollowersResponse create() => GetMyselfDetailFollowersResponse._();
  GetMyselfDetailFollowersResponse createEmptyInstance() => create();
  static $pb.PbList<GetMyselfDetailFollowersResponse> createRepeated() => $pb.PbList<GetMyselfDetailFollowersResponse>();
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailFollowersResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetMyselfDetailFollowersResponse>(create);
  static GetMyselfDetailFollowersResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$3.Player> get players => $_getList(0);
}

class GetMyselfDetailFolloweesResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetMyselfDetailFolloweesResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$3.Player>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'players', $pb.PbFieldType.PM, subBuilder: $3.Player.create)
    ..hasRequiredFields = false
  ;

  GetMyselfDetailFolloweesResponse._() : super();
  factory GetMyselfDetailFolloweesResponse({
    $core.Iterable<$3.Player>? players,
  }) {
    final _result = create();
    if (players != null) {
      _result.players.addAll(players);
    }
    return _result;
  }
  factory GetMyselfDetailFolloweesResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetMyselfDetailFolloweesResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetMyselfDetailFolloweesResponse clone() => GetMyselfDetailFolloweesResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetMyselfDetailFolloweesResponse copyWith(void Function(GetMyselfDetailFolloweesResponse) updates) => super.copyWith((message) => updates(message as GetMyselfDetailFolloweesResponse)) as GetMyselfDetailFolloweesResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailFolloweesResponse create() => GetMyselfDetailFolloweesResponse._();
  GetMyselfDetailFolloweesResponse createEmptyInstance() => create();
  static $pb.PbList<GetMyselfDetailFolloweesResponse> createRepeated() => $pb.PbList<GetMyselfDetailFolloweesResponse>();
  @$core.pragma('dart2js:noInline')
  static GetMyselfDetailFolloweesResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetMyselfDetailFolloweesResponse>(create);
  static GetMyselfDetailFolloweesResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$3.Player> get players => $_getList(0);
}

class PostMyselfDetailFolloweeRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostMyselfDetailFolloweeRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'playerId', protoName: 'playerId')
    ..hasRequiredFields = false
  ;

  PostMyselfDetailFolloweeRequest._() : super();
  factory PostMyselfDetailFolloweeRequest({
    $core.String? playerId,
  }) {
    final _result = create();
    if (playerId != null) {
      _result.playerId = playerId;
    }
    return _result;
  }
  factory PostMyselfDetailFolloweeRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostMyselfDetailFolloweeRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostMyselfDetailFolloweeRequest clone() => PostMyselfDetailFolloweeRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostMyselfDetailFolloweeRequest copyWith(void Function(PostMyselfDetailFolloweeRequest) updates) => super.copyWith((message) => updates(message as PostMyselfDetailFolloweeRequest)) as PostMyselfDetailFolloweeRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostMyselfDetailFolloweeRequest create() => PostMyselfDetailFolloweeRequest._();
  PostMyselfDetailFolloweeRequest createEmptyInstance() => create();
  static $pb.PbList<PostMyselfDetailFolloweeRequest> createRepeated() => $pb.PbList<PostMyselfDetailFolloweeRequest>();
  @$core.pragma('dart2js:noInline')
  static PostMyselfDetailFolloweeRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostMyselfDetailFolloweeRequest>(create);
  static PostMyselfDetailFolloweeRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get playerId => $_getSZ(0);
  @$pb.TagNumber(1)
  set playerId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlayerId() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlayerId() => clearField(1);
}

class PostMyselfDetailFolloweesResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostMyselfDetailFolloweesResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$3.Player>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'players', $pb.PbFieldType.PM, subBuilder: $3.Player.create)
    ..hasRequiredFields = false
  ;

  PostMyselfDetailFolloweesResponse._() : super();
  factory PostMyselfDetailFolloweesResponse({
    $core.Iterable<$3.Player>? players,
  }) {
    final _result = create();
    if (players != null) {
      _result.players.addAll(players);
    }
    return _result;
  }
  factory PostMyselfDetailFolloweesResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostMyselfDetailFolloweesResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostMyselfDetailFolloweesResponse clone() => PostMyselfDetailFolloweesResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostMyselfDetailFolloweesResponse copyWith(void Function(PostMyselfDetailFolloweesResponse) updates) => super.copyWith((message) => updates(message as PostMyselfDetailFolloweesResponse)) as PostMyselfDetailFolloweesResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostMyselfDetailFolloweesResponse create() => PostMyselfDetailFolloweesResponse._();
  PostMyselfDetailFolloweesResponse createEmptyInstance() => create();
  static $pb.PbList<PostMyselfDetailFolloweesResponse> createRepeated() => $pb.PbList<PostMyselfDetailFolloweesResponse>();
  @$core.pragma('dart2js:noInline')
  static PostMyselfDetailFolloweesResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostMyselfDetailFolloweesResponse>(create);
  static PostMyselfDetailFolloweesResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$3.Player> get players => $_getList(0);
}

class DeleteMyselfDetailFolloweeRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DeleteMyselfDetailFolloweeRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'playerId', protoName: 'playerId')
    ..hasRequiredFields = false
  ;

  DeleteMyselfDetailFolloweeRequest._() : super();
  factory DeleteMyselfDetailFolloweeRequest({
    $core.String? playerId,
  }) {
    final _result = create();
    if (playerId != null) {
      _result.playerId = playerId;
    }
    return _result;
  }
  factory DeleteMyselfDetailFolloweeRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeleteMyselfDetailFolloweeRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailFolloweeRequest clone() => DeleteMyselfDetailFolloweeRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailFolloweeRequest copyWith(void Function(DeleteMyselfDetailFolloweeRequest) updates) => super.copyWith((message) => updates(message as DeleteMyselfDetailFolloweeRequest)) as DeleteMyselfDetailFolloweeRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailFolloweeRequest create() => DeleteMyselfDetailFolloweeRequest._();
  DeleteMyselfDetailFolloweeRequest createEmptyInstance() => create();
  static $pb.PbList<DeleteMyselfDetailFolloweeRequest> createRepeated() => $pb.PbList<DeleteMyselfDetailFolloweeRequest>();
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailFolloweeRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeleteMyselfDetailFolloweeRequest>(create);
  static DeleteMyselfDetailFolloweeRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get playerId => $_getSZ(0);
  @$pb.TagNumber(1)
  set playerId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlayerId() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlayerId() => clearField(1);
}

class DeleteMyselfDetailFolloweesResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DeleteMyselfDetailFolloweesResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$3.Player>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'players', $pb.PbFieldType.PM, subBuilder: $3.Player.create)
    ..hasRequiredFields = false
  ;

  DeleteMyselfDetailFolloweesResponse._() : super();
  factory DeleteMyselfDetailFolloweesResponse({
    $core.Iterable<$3.Player>? players,
  }) {
    final _result = create();
    if (players != null) {
      _result.players.addAll(players);
    }
    return _result;
  }
  factory DeleteMyselfDetailFolloweesResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeleteMyselfDetailFolloweesResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailFolloweesResponse clone() => DeleteMyselfDetailFolloweesResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeleteMyselfDetailFolloweesResponse copyWith(void Function(DeleteMyselfDetailFolloweesResponse) updates) => super.copyWith((message) => updates(message as DeleteMyselfDetailFolloweesResponse)) as DeleteMyselfDetailFolloweesResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailFolloweesResponse create() => DeleteMyselfDetailFolloweesResponse._();
  DeleteMyselfDetailFolloweesResponse createEmptyInstance() => create();
  static $pb.PbList<DeleteMyselfDetailFolloweesResponse> createRepeated() => $pb.PbList<DeleteMyselfDetailFolloweesResponse>();
  @$core.pragma('dart2js:noInline')
  static DeleteMyselfDetailFolloweesResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeleteMyselfDetailFolloweesResponse>(create);
  static DeleteMyselfDetailFolloweesResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$3.Player> get players => $_getList(0);
}

