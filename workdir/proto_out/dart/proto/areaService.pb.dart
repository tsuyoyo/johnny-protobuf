///
//  Generated code. Do not modify.
//  source: proto/areaService.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'area.pb.dart' as $0;

class GetAreaCityResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetAreaCityResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  GetAreaCityResponse._() : super();
  factory GetAreaCityResponse({
    $core.Iterable<$0.City>? cities,
  }) {
    final _result = create();
    if (cities != null) {
      _result.cities.addAll(cities);
    }
    return _result;
  }
  factory GetAreaCityResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetAreaCityResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetAreaCityResponse clone() => GetAreaCityResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetAreaCityResponse copyWith(void Function(GetAreaCityResponse) updates) => super.copyWith((message) => updates(message as GetAreaCityResponse)) as GetAreaCityResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetAreaCityResponse create() => GetAreaCityResponse._();
  GetAreaCityResponse createEmptyInstance() => create();
  static $pb.PbList<GetAreaCityResponse> createRepeated() => $pb.PbList<GetAreaCityResponse>();
  @$core.pragma('dart2js:noInline')
  static GetAreaCityResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetAreaCityResponse>(create);
  static GetAreaCityResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

